const Item = require('../models/item');

module.exports = {
  index,
  new: newItem,
  create,
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