const Character = require('../models/character');
const Item = require('../models/item');
const Locations = require('../models/location')

module.exports = {
    index,
    show,
    new: newCharacter,
    create,
    update,
    edit,
    delete: deleteCharacter,
  };

  async function index(req, res) {
    const characters = await Character.find({});
    res.render('characters/index', { title: 'All Characters', characters });
  }

  async function show(req, res, next) {
    try {
      const items = await Item.find({});
      const locations = await Locations.find({});
      const character = await Character.findById(req.params.id).exec();
      if (!character) {
        return res.redirect('/characters');
      }
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // const tickets = await Ticket.find({ flight: flight._id }).exec();
  
      res.render('characters/show', { character, items, locations, title: 'Character Details' });
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

  async function update(req, res) {
    try {
      const characterId = req.params.id;
      const updates = req.body; // Assuming req.body contains the updated fields
  
      // Use findOneAndUpdate to update the character by its ID
      const updatedCharacter = await Character.findOneAndUpdate(
        { _id: characterId },
        updates,
        { new: true } // Return the updated document after the update
      );
  
      if (!updatedCharacter) {
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Optionally, you can redirect to the character's show page after successful update
      res.redirect(`/characters/${characterId}`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }

  // Other functions for index, create, delete, etc. (if you have any)
  
  async function edit(req, res) {
    try {
      const characterId = req.params.id;
  
      // Find the character by its ID
      const character = await Character.findById(characterId);
  
      if (!character) {
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Render the edit.ejs page with the character data for updating
      res.render('characters/edit', {
        title: 'Update Character',
        character: character,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }

  async function deleteCharacter(req, res) {
    try {
      const characterId = req.params.id;
  
      // Find the character by its ID
      const character = await Character.findById(characterId);
  
      if (!character) {
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Delete the character from the database
      await Character.findByIdAndRemove(characterId);
  
      // Redirect back to the index page after successful deletion
      res.redirect('/characters');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  }