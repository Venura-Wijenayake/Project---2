const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    opportunities: { type: String, default: 'None' }, // Default value set to 'None'
  });
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('Location', locationSchema);