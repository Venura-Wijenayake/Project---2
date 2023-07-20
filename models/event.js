const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
  }, {
    timestamps: true
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('Event', eventSchema);