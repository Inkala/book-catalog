const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Book = new Schema({
  name: {
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