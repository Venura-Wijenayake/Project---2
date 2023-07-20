const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

// GET /items
router.get('/', itemsCtrl.index);
// GET /items/new
router.get('/new', itemsCtrl.new);
// GET /items/:id (show functionality) MUST be below new route
// POST /items
router.post('/', itemsCtrl.create);

module.exports = router;