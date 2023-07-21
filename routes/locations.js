const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations');
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /locations
router.get('/', locationsCtrl.index);
// GET /locations/new
router.get('/new', locationsCtrl.new);
// POST /locations
router.post('/', locationsCtrl.create);


// POST route to add an item to a character's locationHeld array
router.post('/characters/:id/locations', ensureLoggedIn, locationsCtrl.addTolocationHeld);

// DELETE /characters/:characterId/items/:itemId
router.delete('/characters/:characterId/locations/:locationId', ensureLoggedIn, locationsCtrl.deletelocationHeld); 




module.exports = router;
	