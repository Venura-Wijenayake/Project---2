const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  isWeapon: { type: Boolean, default: true },
  range: { type: String, required: function () { return this.isWeapon; } },
  RoF: { type: String, required: function () { return this.isWeapon; } },
  damage: { type: String, required: function () { return this.isWeapon; } },
  pen: { type: Number, required: function () { return this.isWeapon; } },
  clip: { type: String, required: function () { return this.isWeapon; } },
  rld: { type: String, required: function () { return this.isWeapon; } },
  special: { type: String, default: "None"},
  kg: { type: Number, required: true },
  availability: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;