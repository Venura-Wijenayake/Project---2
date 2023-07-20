const express = require('express');
const router = express.Router();
const locationsCtrl = require('../controllers/locations');

// GET /movies
router.get('/', locationsCtrl.index);

module.exports = router;
	