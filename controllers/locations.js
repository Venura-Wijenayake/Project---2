const Location = require('../models/location');
const Character = require('../models/character');

module.exports = {
  index,
  new: newLocation,
  create,
  addTolocationHeld,
  deletelocationHeld,
};


  async function index(req, res) {
    const locations = await Location.find({});
    res.render('locations/index', { title: 'All Locations', locations });
  }


  
  function newLocation(req, res) {
    res.render('locations/new', { title: 'Add Location', errorMsg: '' });
  }
  
  async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }

    const location = new Location(req.body);
    try {
      await location.save()
      res.redirect(`/locations`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('locations/new', {title: 'All Locations', errorMsg: err.message });
    }

  }

  async function addTolocationHeld(req, res) {
    const character = await Character.findById(req.params.id);
    // The locationHeld array holds the items's ObjectId (referencing)
    character.locationHeld.push(req.body.locationId);
    await character.save();
    res.redirect(`/characters/${character._id}`);
  }

    // Function to remove an item from a character's itemsHeld array
async function deletelocationHeld(req, res) {
  try {
    const character = await Character.findById(req.params.characterId);
    
    if (!character) {
      
      return res.status(404).send('Character not found.');
    }

    // Find the index of the item in the locationHeld array
    const locationIndex = character.locationHeld.indexOf(req.params.locationId);

    if (locationIndex === -1) {
      return res.status(404).send('Location not found in character\'s locationHeld.');
    }

    // Remove the item from the itemsHeld array
    character.locationHeld.splice(locationIndex, 1);
    await character.save();

    // Redirect back to the character's show page
    res.redirect(`/characters/${character._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}