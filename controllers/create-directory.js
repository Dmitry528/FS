const directoryModel = require('../models/folders-model');

exports.createDirectory = async (req, res) => {
    res.render('create-directory');
}

exports.PostcreateDirectory = async (req, res) => {
    try {
        const { nameFolder } = req.body;
        directoryModel.create({
            folderName: nameFolder
        })
        res.render('response-page');
    }
    catch (error) {
        res.render('error');
    }
}