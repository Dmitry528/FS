const { Schema, model } = require('mongoose');

const fileModel = new Schema({
  filename: {
    type: String,
    required: true
  },
  folderPath: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true
  }
});

module.exports = model('filehostings', fileModel);