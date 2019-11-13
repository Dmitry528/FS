const express = require('express');
const router = express.Router();

const { PostFilesByDirectory, GetFilesByDirectory } = require('../controllers/showFilesBuCurrent');

router.get('/current', GetFilesByDirectory);
router.post('/current', PostFilesByDirectory);

module.exports = router;
