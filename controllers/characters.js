const Character = require('../models/character');

module.exports = {
    index,
    show,
    new: newCharacter,
    create,
  };

  async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', { title: 'All Characters', characters });
  }

  async function show(req, res, next) {
    try {
      const character = await Character.findById(req.params.id).exec();
      if (!character) {
        return res.redirect('/characters');
      }
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // const tickets = await Ticket.find({ flight: flight._id }).exec();
  
      res.render('characters/show', { character, title: 'Character Details' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }


  function newCharacter(req, res) {
    res.render('characters/new', { title: 'Add Character', errorMsg: '' });
  }

  async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }

    const character = new Character(req.body);
    try {
      await character.save()
      res.redirect(`/characters`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('characters/new', { errorMsg: err.message });
    }
  }