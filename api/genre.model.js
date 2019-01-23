const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Genre = new Schema({
  name: {
    type: String
  }
},{
    collection: 'genre'
});

module.exports = mongoose.model('Genre', Genre);