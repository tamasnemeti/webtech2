var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Cart = require('../models/cart');

/* GET home page. */
router.get('/', function(req, res, next) {
  Book.find(function(err, docs) {
    res.render('shop/index', {title: 'Könyvesbolt', books: docs});
  });
});

router.get('/search', function(req, res, next) {
  var query = { title: "Harry Potter and the Prisoner of Azkaban" };
  Book.find(query, function(err, docs) {
    res.render('shop/search', {title: 'Keresési eredmények', books: docs});
    console.log(query);
  });
});

router.get('/to-cart/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

  Book.findById(bookId, function(err, book) {
    if (err) {
      return res.redirect('/');
    }
    if (book.stock < 1) {
      return res.redirect('/');
    }
    cart.add(book, book.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/remove/:id', function(req, res, next) {
  var bookId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(bookId);
  req.session.cart = cart;
  res.redirect('/cart');
});


router.get('/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/cart', {books: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/cart', {books: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/');
  }
  var cart = new Cart(req.session.cart);
  if (req.session.cart.totalPrice > req.user.balance) {
    return res.redirect('/cart');
  }
  res.render('shop/checkout');
  req.session.cart = null;
});

module.exports = router;
