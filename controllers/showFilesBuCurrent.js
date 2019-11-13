const folderModel = require('../models/folders-model');

exports.PostFilesByDirectory = async (req, res) => {
    res.send('Post');
}

exports.GetFilesByDirectory = async (req, res) => {
    const folderModelD = await folderModel.find({});
    res.render('seletcDirectory', {
        directoryNames: folderModelD
    });
}