"use strict";
const express = require("express");
const router = new express.Router();
var User = require("../models/users").User;
var Plan = require("../models/plans").Plan;


//helper functions
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


//
router.get("/", function(req, res, next) {
  res.redirect("/api/");
});

//get user
router.get("/:id", function(req, res, next) {
  return User.findById(req.params.id)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
});

//save new user
router.post("/", function(req, res, next) {
  if (User.find({ userId: req.body })) {
    return console.log("Name exists already");
  } else {
    return User.create(req.body)
      .then(respondWithResult(res, 201))
      .catch(handleError(res));
  }
});

module.exports = router;
