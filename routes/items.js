const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /items
router.get('/', itemsCtrl.index);
// GET /items/new
router.get('/new', itemsCtrl.new);
// GET /items/:id (show functionality) MUST be below new route
// POST /items
router.post('/', itemsCtrl.create);

// POST route to add an item to a character's itemsHeld array
router.post('/characters/:id/items',  ensureLoggedIn, itemsCtrl.addToItemsHeld);


// DELETE /characters/:characterId/items/:itemId
router.delete('/characters/:characterId/items/:itemId', ensureLoggedIn, itemsCtrl.deleteItemsHeld); 



module.exports = router;