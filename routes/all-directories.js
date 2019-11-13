const express = require('express');
const router = express.Router();

// controllers for directories
const { getAllDirectories } = require('../controllers/directories-page');

router.get('/directories', getAllDirectories);

module.exports = router;
