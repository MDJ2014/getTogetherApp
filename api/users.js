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

function handleEntityFound(res) {
  return function(entity) {
    if (entity) {
      res.status(203).end(203);
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
//res.redirect("/");
return User.find({})
    .exec()
 
    .then(respondWithResult(res))
    .catch(handleError(res));

});

//get user
router.get("/:id", function(req, res, next) {
  return User.findById(req.params.id)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
});


router.post("/", function(req, res, next) {
User.find({"userId": req.body.userId}).exec()
.then(handleEntityFound(res))
 .then(()=>{
  return User.create(req.body)
     //  .then(respondWithResult(res, 201))
       .then(res.status(201))
       .catch(handleError(res));
 })

    });
  



module.exports = router;




  