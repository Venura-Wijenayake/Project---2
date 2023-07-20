const express = require('express');
const router = express.Router();
const adventurelogCtrl = require('../controllers/adventurelogs');

// GET /movies
router.get('/', adventurelogCtrl.index);

module.exports = router;
	