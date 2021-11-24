require('./models/db');

var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var urlencode = require("urlencode");
var ejs = require("ejs");
var validator = require('validator');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes/router');

var app = express();

// set an engine template
app.set( 'view engine' , 'ejs' );

//set some static files
app.use(express.static('./public'));

//
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Listenning
app.listen(8000, ()=>{
    console.log('running!');
});

app.use('/', routes);