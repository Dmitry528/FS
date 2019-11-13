const express = require('express');
const router = express.Router();

// controllers for main page
const { getMainPage } = require('../controllers/index-page');

router.get('/', getMainPage);

module.exports = router;
