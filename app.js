"use strict";

// load modules
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var jsonParser = require("body-parser").json;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/users");
const config = require("./config");
const apiRoutes = require("./api");
const app = express();
var cors = require("cors");

app.set("etag", false);
app.use(express.static(path.resolve(__dirname, "GetTogether/dist")));
app.use(jsonParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//*********************DATABASE**************************************** */
var dbName = "letsgettogether";

mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI || "mongodb://localhost:27017/" + dbName, function(err) {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connection to " + dbName + " database successful");
  }
});

mongoose.Promise = global.Promise;

// Mongodb connection
//mongoose.connect('mongodb://localhost:27017/' + dbName);  /**,{ autoIndex: false }); add for production */
const db = mongoose.connection;

//********************DATABASE***************************************** */

app.use(cors());
app.use("/api", apiRoutes);

// catch 404 and forward to global error handler
app.use(function(req, res, next) {
  var err = new Error("File Not Found");
  //return res.render('index');
  err.status = 404;
  next(err);
});

// Express's global error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var err = new Error("File Not Found");
  //return res.render('index');
  err.status = 500;
  next(err);
});

module.exports = app;
