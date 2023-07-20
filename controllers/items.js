const Item = require('../models/item');

module.exports = {
    index,
  };

  async function index(req, res) {
    const items = await Item.find({});
    res.render('items/index', { title: 'All Items', items });
  }