const express = require('express');
const router = express.Router();

const Multer = require('multer');
const upload = Multer({ dest: './public/uploads/' });


// controllers for upload file
const { getUploadFile, postUploadFile } = require('../controllers/upload-file');

router.get('/upload', getUploadFile);
router.post('/upload', upload.single('file'), postUploadFile);

module.exports = router;
