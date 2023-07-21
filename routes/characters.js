const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const itemsCtrl = require('../controllers/items');

// GET /characters
router.get('/', charactersCtrl.index);
// GET /characters/new
router.get('/new', charactersCtrl.new);
// GET /characters/:id (show functionality) MUST be below new route
router.get('/:id', charactersCtrl.show);
// POST /characters
router.post('/', charactersCtrl.create);

router.post('/characters/:id/items', itemsCtrl.addToItemsHeld);

// DELETE /characters/:characterId/items/:itemId
router.delete('/characters/:characterId/items/:itemId', itemsCtrl.removeFromItemsHeld);

module.exports = router;
	