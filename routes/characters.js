const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

// GET /characters
router.get('/', charactersCtrl.index);
// GET /characters/new
router.get('/new', charactersCtrl.new);
// GET /characters/:id (show functionality) MUST be below new route
// POST /characters
router.post('/', charactersCtrl.create);

module.exports = router;
	