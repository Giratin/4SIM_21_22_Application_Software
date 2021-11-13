const fs = require("fs");
const path = require("path");
const { Book } = require("../models/book.model");

const getAllBooks = function (req, res) {
    fs.readFile(path.join(__dirname, "../list.json"), function (err, buffer) {
        if (!err) {
            const books = JSON.parse(buffer).books;
            let livres = [];
            books.forEach(function (el) {
                const livre = new Book.fromJson(el);
                livres.push(livre);
            });

            res.render("list", { livres: livres });
        }
    })
};
const getOneBookById = function (req, res) {
    const id = req.params.book_id;
    fs.readFile(path.join(__dirname, "../list.json"), function (err, buffer) {
        if (!err) {
            const books = JSON.parse(buffer).books;
            let book = books.find(function (el) {
                return el.id == id;
            });
            
            res.render("livre", { book: new Book.fromJson(book) });
        }
    })
};




module.exports.getAllBooks = getAllBooks;
module.exports.getOneBookById = getOneBookById;