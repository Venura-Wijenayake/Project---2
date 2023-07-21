const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /characters
router.get('/',  charactersCtrl.index);
// GET /characters/new
router.get('/new', ensureLoggedIn, charactersCtrl.new);
// GET /characters/:id (show functionality) MUST be below new route
router.get('/:id', charactersCtrl.show);
// POST /characters
router.post('/', ensureLoggedIn, charactersCtrl.create);
// PUT /characters/:id
router.put('/:id', ensureLoggedIn, charactersCtrl.update);
// GET /characters/:id/edit
router.get('/:id/edit', ensureLoggedIn, charactersCtrl.edit);
// DELETE /characters/:id
router.delete('/:id', ensureLoggedIn, charactersCtrl.delete);


module.exports = router;
	