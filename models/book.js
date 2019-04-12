var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    author: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    isbn: {type: Number, required: true},
    year: {type: Number, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
})

module.exports = mongoose.model('Book', schema);