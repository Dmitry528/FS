const express = require('express');
const router = express.Router();

// controllers for create directory
const { createDirectory, PostcreateDirectory } = require('../controllers/create-directory');

router.get('/create-directory', createDirectory);
router.post('/create-directory', PostcreateDirectory );

module.exports = router;
