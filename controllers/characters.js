const Character = require('../models/character');

module.exports = {
    index,
    new: newCharacter,
    create,
  };

  async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', { title: 'All Characters', characters });
  }

  function newCharacter(req, res) {
    res.render('characters/new', { title: 'Add Character', errorMsg: '' });
  }

  async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new character
      const character = await Characters.create(req.body);
      // Redirect to the new movie's show functionality 
      res.redirect(`/characters/${character._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('characters/new', { errorMsg: err.message });
    }
  }