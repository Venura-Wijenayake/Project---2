const Location = require('../models/location');

module.exports = {
    index,
  };

  async function index(req, res) {
    const locations = await Location.find({});
    res.render('locations/index', { title: 'All Location', locations });
  }