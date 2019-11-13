const fileModel = require('../models/file-model');
const directoryModel = require('../models/folders-model');

exports.getUploadFile = async (req, res) => {
    const directory = await directoryModel.find({});
    res.render('upload-file', {
        directoryNames: directory
    });
}

exports.postUploadFile = async (req, res) => {
    try {
        const { folder } = req.body;
        const { filename, originalname } = req.file;

        fileModel.create({
            filename: filename,
            folderPath: folder,
            originalName: originalname
        })
        res.render('response-page');
    }
    catch (error) {
        res.render('error');
    }
}