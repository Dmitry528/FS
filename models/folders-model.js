const { Schema, model } = require('mongoose');

const folderModel = new Schema({
  folderName: {
    type: String,
    required: true
  },
});

module.exports = model('hostingdirectories', folderModel);