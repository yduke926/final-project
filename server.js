// module imports
const express = require('express');
var mongoose = require('mongoose');
var dotenv = require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
let passport = require('passport');


// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

// models
require('./models/user');
require('./models/studentreport');

let studentreports = require('./routes/studentreports');
let users = require('./routes/users');
const adminhours = require('./routes/api/adminhours');

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize());
app.use('/users', users);

app.use('/studentreports', studentreports);
app.use('/api/adminhours', adminhours);


//mlab connection
mongoose.connect('mongodb://Meditrack:Meditrack123@ds133252.mlab.com:33252/studentdatabase');


// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
