const AdventureLog = require('../models/adventure');

module.exports = {
  index,
};

async function index(req, res) {
  const adventurelogs = await AdventureLog.find({});
  res.render('adventurelogs/index', { title: 'Adventure Logs', adventurelogs });
}