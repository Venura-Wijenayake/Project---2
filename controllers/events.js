const Event = require('../models/event');

module.exports = {
    index,
  };

  async function index(req, res) {
    const events = await Event.find({});
    res.render('events/index', { title: 'All Events', events });
  }