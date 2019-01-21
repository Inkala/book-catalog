const express = require("express");
const bookRoutes = express.Router();

// Require Books model in our routes module
let Book = require("./book.model");

// Defined store route
bookRoutes.route("/add")
.post(function(req, res) {
  let book = new Book(req.body);
  book.save()
    .then(book => {
      res.status(200).json({ book: "book was added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to the book");
    });
});

// Defined get index route
bookRoutes.route("/").get(function(req, res) {
  Book.find(function(err, books) {
    if (err) {
      console.log(err);
    } else {
      res.json(books);
    }
  });
});

//  Defined edit route
bookRoutes.route("/edit/:id").post(function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (!book) res.status(404).send("book not found");
    else {
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.price = req.body.price;

      book
        .save()
        .then(book => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("Unable to edit the book");
        });
    }
  });
});

// Defined delete route
bookRoutes.route("/delete/:id").get(function(req, res) {
  Book.findByIdAndRemove({ _id: req.params.id }, function(err, book) {
    if (err) res.json(err);
    else res.json("Book successfully removed");
  });
});

module.exports = bookRoutes;
