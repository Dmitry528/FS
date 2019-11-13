const express = require('express');
const router = express.Router();

// controllers for files
const { getAllFiles } = require('../controllers/show-all-files');

router.get('/files', getAllFiles);

module.exports = router;
