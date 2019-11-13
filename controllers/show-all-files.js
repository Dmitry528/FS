const filesModel = require('../models/file-model');

exports.getAllFiles = async (req, res) => {
    const files = await filesModel.find({})
    res.render('show-all-files', {
        allFiles: files
    });
}