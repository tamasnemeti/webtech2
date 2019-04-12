var Book = require('../models/book');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore',{ useNewUrlParser: true });

var books = [
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and The Philosopher\'s Stone',
        description: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old.',
        isbn: 1111,
        year: 1997,
        price: 1000,
        stock: 9
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and The Chamber of Secrets',
        description: 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks. ',
        isbn: 1112,
        year: 1998,
        price: 1100,
        stock: 8
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort\'s old allies.',
        isbn: 1113,
        year: 1999,
        price: 1200,
        stock: 7
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Harry_Potter_and_the_Goblet_of_Fire.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Goblet of Fire',
        description: 'Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.',
        isbn: 1114,
        year: 2000,
        price: 1300,
        stock: 6
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter\'s struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. Five million copies were sold in the first 24 hours of publication.[1] It is the longest book of the series.',
        isbn: 1115,
        year: 2003,
        price: 1400,
        stock: 0
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Harry_Potter_and_the_Half-Blood_Prince.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Half-Blood Prince',
        description: 'Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J. K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during protagonist Harry Potter\'s sixth year at Hogwarts, the novel explores the past of Harry\'s nemesis, Lord Voldemort, and Harry\'s preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.',
        isbn: 1116,
        year: 2005,
        price: 1500,
        stock: 4
    }),
    new Book ({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Deathly Hallows',
        description: 'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. The book was released on 21 July 2007, ending the series that began in 1997 with the publication of Harry Potter and the Philosopher\'s Stone. It was published in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.',
        isbn: 1117,
        year: 2007,
        price: 1600,
        stock: 0
    })
];

var done = 0;
for (var i =0; i < books.length; i++) {
    books[i].save(function (err, result) {
        done++;
        if (done === books.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}