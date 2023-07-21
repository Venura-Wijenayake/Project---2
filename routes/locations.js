const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /locations
router.get('/', locationsCtrl.index);
// GET /locations/new
router.get('/new', locationsCtrl.new);
// POST /locations
router.post('/', locationsCtrl.create);


// POST route to add an item to a character's locationHeld array
router.post('/characters/:id/locations', locationsCtrl.addTolocationHeld);

// DELETE /characters/:characterId/items/:itemId
router.delete('/characters/:characterId/locations/:locationId', locationsCtrl.deletelocationHeld); 


module.exports = router;
	