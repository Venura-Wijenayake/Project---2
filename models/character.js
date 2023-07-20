const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const characterSchema = new Schema({
  name: { type: String, required: true },
  playerName: { type: String, required: true },
  careerPath: { type: String, required: true },
  rank: { type: String, required: true },
  homeworld: { type: String, required: true },
  motivation: { type: String, required: true },
  description: { type: String, required: true },
  weaponSkill: { type: Number, required: true },
  ballisticSkill: { type: Number, required: true },
  strength: { type: Number, required: true },
  toughness: { type: Number, required: true },
  agility: { type: Number, required: true },
  intelligence: { type: Number, required: true },
  perception: { type: Number, required: true },
  willPower: { type: Number, required: true },
  fellowship: { type: Number, required: true },
  talentsAndTraits: { type: String, required: true },
  specialAbilities: { type: String, required: true },
  psychicDisciplines: { type: String, required: true },
  psychicTechniques: { type: String, required: true },
  startingProfitFactor: { type: Number, required: true },
  currentProfitFactor: { type: Number, required: true },
  misfortunes: { type: Number, required: true },
  experiencePointsToSpend: { type: Number, required: true },
  experiencePointsSpent: { type: Number, required: true },
}, {
  timestamps: true
});
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model('Character', characterSchema);
