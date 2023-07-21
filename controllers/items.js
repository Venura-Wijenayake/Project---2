const Item = require('../models/item');
const Character = require('../models/character');

module.exports = {
  index,
  new: newItem,
  create,
  addToItemsHeld,
  removeFromItemsHeld, 
};


  async function index(req, res) {
    const items = await Item.find({});
    res.render('items/index', { title: 'All Items', items });
  }

  function newItem(req, res) {
    res.render('items/new', { title: 'Add Item', errorMsg: '' });
  }

  async function create(req, res) {
    req.body.isWeapon = !!req.body.isWeapon;
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }


    const item = new Item(req.body);
    try {
      let special = req.body.special;
      if (!special || special.trim() === '') {
        special = 'None';
      }
      await item.save()
      res.redirect(`/items`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('items/new', {title: 'All Item', errorMsg: err.message });
    }
  }

  async function addToItemsHeld(req, res) {
    const character = await Character.findById(req.params.id);
    // The itemsHeld array holds the items's ObjectId (referencing)
    character.itemsHeld.push(req.body.itemId);
    await character.save();
    res.redirect(`/characters/${character._id}`);
  }

  // Function to remove an item from a character's itemsHeld array
async function removeFromItemsHeld(req, res) {
  try {
    const character = await Character.findById(req.params.characterId);
    
    if (!character) {
      return res.status(404).send('Character not found.');
    }

    // Find the index of the item in the itemsHeld array
    const itemIndex = character.itemsHeld.indexOf(req.params.itemId);

    if (itemIndex === -1) {
      return res.status(404).send('Item not found in character\'s itemsHeld.');
    }

    // Remove the item from the itemsHeld array
    character.itemsHeld.splice(itemIndex, 1);
    await character.save();

    // Redirect back to the character's show page
    res.redirect(`/characters/${character._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}