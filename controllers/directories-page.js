const directoryModel = require('../models/folders-model');

exports.getAllDirectories = async (req, res) => {
    const directories = await directoryModel.find({});
    
    res.render('show-directories', {
        directoriesList: directories
    });
}