const Location = require('../models/location');

module.exports = {
  index,
  new: newLocation,
  create,
};


  async function index(req, res) {
    const locations = await Location.find({});
    res.render('locations/index', { title: 'All Location', locations });
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