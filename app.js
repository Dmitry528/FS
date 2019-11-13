const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const uploadImgRouter = require('./routes/upload-file');
const allDirectoriesRouter = require('./routes/all-directories');
const AllFiles = require('./routes/all-files');
const createDirectory = require('./routes/create-directory');
const currentDirectory = require('./routes/currentDirectoryFile');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', uploadImgRouter);
app.use('/', allDirectoriesRouter);
app.use('/', AllFiles);
app.use('/', createDirectory);
app.use('/', currentDirectory);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect('mongodb+srv://testUser:testUser123@cluster0-q5xnz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, result) => {
  if(err){
    console.log(err);
  }
  console.log('Connected to Mongo');
})

module.exports = app;
