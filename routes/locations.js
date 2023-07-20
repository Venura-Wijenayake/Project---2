const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /locations
router.get('/', locationsCtrl.index);
// GET /locations/new
router.get('/new', locationsCtrl.new);
// POST /locations
router.post('/', locationsCtrl.create);

module.exports = router;
	