const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Genres
let Genre = new Schema({
  name: {
    type: String
  }
},{
    collection: 'genre'
});

module.exports = mongoose.model('Genre', Genre);