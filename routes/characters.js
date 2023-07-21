const express = require('express');
const router = express.Router();
const charactersCtrl = require('../controllers/characters');

// GET /characters
router.get('/', charactersCtrl.index);
// GET /characters/new
router.get('/new', charactersCtrl.new);
// GET /characters/:id (show functionality) MUST be below new route
router.get('/:id', charactersCtrl.show);
// POST /characters
router.post('/', charactersCtrl.create);
// PUT /characters/:id
router.put('/:id', charactersCtrl.update);
// GET /characters/:id/edit
router.get('/:id/edit', charactersCtrl.edit);
// DELETE /characters/:id
router.delete('/:id', charactersCtrl.delete);


module.exports = router;
	