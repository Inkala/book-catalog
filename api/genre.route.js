const express = require("express");
const genreRoutes = express.Router();

// Require Genres model in our routes module
let Genre = require("./genre.model");

// Defined store route
genreRoutes.route("/add")
.post(function(req, res) {
  let genre = new Genre(req.body);
  genre.save()
    .then(genre => {
      res.status(200).json({ genre: "genre was added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to the genre");
    });
});

// Defined get index route
genreRoutes.route("/").get(function(req, res) {
  Genre.find(function(err, genres) {
    if (err) {
      console.log(err);
    } else {
      res.json(genres);
    }
  });
});

//  Defined edit route
genreRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Genre.findById(id, function (err, genre){
      res.json(genre);
  });
});

genreRoutes.route("/edit/:id").post(function(req, res) {
  Genre.findById(req.params.id, function(err, genre) {
    if (!genre) res.status(404).send("genre not found");
    else {
      genre.name = req.body.name;

      genre
        .save()
        .then(genre => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("Unable to edit the genre");
        });
    }
  });
});

// Defined delete route
genreRoutes.route("/delete/:id").get(function(req, res) {
  Genre.findByIdAndRemove({ _id: req.params.id }, function(err, genre) {
    if (err) res.json(err);
    else res.json("Genre successfully removed");
  });
});

module.exports = genreRoutes;
