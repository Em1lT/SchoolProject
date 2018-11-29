'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/resize');
const exif = require('./modules/exif');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const bodyParser = require('body-parser');
const passport   = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const loggedIn = false;
const connection = db.connect();

const cb = (result, res) => {
  console.log(result);
  res.send(result);
};

app.use(express.static('public'));

passport.serializeUser((user, done) => {
  console.log('serialize: ' + user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(session({
  secret: 'keyboard LOL cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

passport.use(new LocalStrategy(
  (username, password, done) => {
    console.log('Here we go: ' + username);
    if (username !== process.env.USR_NAME || password !== process.env.USR_PWD) { return done(null, false); }
    return done(null, { username: username } );
  }
));

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }));

app.get('/', (req,res) => {
  if (req.secure) {
    console.log(req.user);
    if(req.user !== undefined) res.send('Hello ' + req.user.username);
    else res.send('https :)');
  }
  else res.send('hello not secure?');
});

//login stops
app.get('/login', (req,res) => {

  res.send("login");

});
app.use('/delete', (req, res) => {
  var data = { id: req.query.id }
  console.log("delete: " + data);
  db.deleteLast(connection, data);
  res.redirect('/');
});
app.use('/something', (req, res) => {
  console.log("doing");
});
app.post('/update', (req, res, next) => {
  console.log("update");
});
app.get('/update', (req, res) => {
  var data =//[req.query.category, req.query.title, req.query.details, req.query.id]; 
  {
    cat: req.query.category,
    title: req.query.title,
    details: req.query.details,
    id: req.query.id
  }
  db.change(data, connection);
  console.log("update2");
  res.redirect('/');
});
app.get('/search', (req, res) => {
  var findCat = {
    cat: req.query.category
  }
  console.log("search..... "+findCat);
  db.selectCategory(connection, findCat);
  console.log("search finished");
  res.redirect('/');
});
// respond to post and save file
app.post('/upload', upload.single('mediafile'), (req, res, next) => {
  next();
});

// create thumbnail
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 300,
    './public/thumbs/' + req.file.filename + '_thumb', next);
});

// create medium image
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 640,
    './public/medium/' + req.file.filename + '_medium', next);
});

// get coordinates
app.use('/upload', (req, res, next) => {
  exif.getCoordinates(req.file.path).then(coords => {
    req.coordinates = coords;
    next();
  }).catch(() => {
    console.log('No coordinates');
    req.coordinates = {};
    next();
  });
});

// insert to database
app.use('/upload', (req, res, next) => {
  console.log('insert is here');
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.file.filename + '_thumb',
    req.file.filename + '_medium',
    req.file.filename + '.jpg',
    req.coordinates,
  ];
  db.insert(data, connection, next);
});

// get updated data form database and send to client
app.use('/upload', (req, res) => {
  db.select(connection, cb, res);
});

app.get('/images', (req, res) => {
  db.select(connection, cb, res);
});


app.listen(3000);

// *********************
// esimerkkejä:
/*
app.get('/', (req, res) => {
  console.log(req.ip);
  console.log(req.query.myParam);
  res.send('ok 1');
});

app.get('/path1/:param1', (req, res) => {
  console.log(req.params.param1);
  res.send('ok 2');
});

app.get(['/path2', '/path3', '/path4'], (req, res) => {
  console.log(req);
  res.send('ok 3');
});

app.use('/json', (req, res, next) => {
  console.log('Middleware tässä');
  next();
});

app.get('/json', (req, res) => {
  const objekti = {
    id: 1,
    name: 'My response',
  };
  res.send(objekti);
});
*/