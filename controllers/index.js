"use strict";

var Book = require("../models/bookModel");

module.exports = function (router) {
    //var model = new BookMl();

    router.get("/", function (req, res) {
        Book.find({}, function (err, books) {
            if (err) {
                console.log(err);
            }

            books.forEach(function (book) {
                book.truncText = book.truncText(50);
            });
            var model = {
                books: books,
            };
            res.render("index", model);
        });
    });
};
