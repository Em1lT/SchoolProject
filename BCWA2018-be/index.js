'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/img');
const multer = require('multer');
const upload = multer({
  dest: 'public/uploads/'});
const exif = require('./modules/exif');
const app = express();
const connection = db.connect();

const cb = (result, res) => {
  console.log(result);
  res.send(result);
}
app.use(express.static('public'));

app.post('/upload', upload.single('mediafile'), (req, res, next) => {

next();
});

// create thumbnail
app.use('/upload', (req,res,next) => {
  resize.doResize(req.file.path, 300,
    './public/thumbs/'+ req.file.filename+'_thumb.jpg', next);
});

// create medium image
app.use('/upload', (req,res,next) => {
  resize.doResize(req.file.path, 640,
     './public/medium/'+ req.file.filename+'_medium.jpg', next);
});
//remove if wanted to work properly
// get coordinates
/*
app.use('/upload', (req, res, next) =>{
exif.getCoordinates(req.file.path).then(coords => {
  req.coordinates = coords;
  next();
});
});
*/

// insert to database

app.use('/upload', (req, res, next) => {
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.file.filename + '_thumb',
    req.file.filename + '_medium',
    req.file.filename ,
  ];
  db.insert(data, connection, next);
  next();
});

// get updated data from database  and send to client
app.use('/upload', (req, res) => {
  db.selectTitle(connection,cb, res);
  res.send("Upload successful");
});

app.listen(3000);