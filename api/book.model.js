const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Books
let Book = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'book'
});

module.exports = mongoose.model('Book', Book);