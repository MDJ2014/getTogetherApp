"use strict";
const express = require("express");
const router = new express.Router();
const passport = require('passport');

var User = require('../models/users').User;
var Plan = require('../models/plans').Plan;
var Notification= require('../models/notifications').Notification;

var applyPatch = require('fast-json-patch');





function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
      if(entity) {
        return res.status(statusCode).json(entity);
      }
      return null;
    };
  }

  function patchUpdates(patches) {
    return function(entity) {
      try {
        applyPatch(entity, patches, /*validate*/ true);
      } catch(err) {
        return Promise.reject(err);
      }

      return entity.save();
    };
  }

  function removeEntity(res) {
    return function(entity) {
      if(entity) {
        return entity.remove()
          .then(() => res.status(204).end());
      }
    };
  }

  function handleEntityNotFound(res) {
    return function(entity) {
      if(!entity) {
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





router.get("/",  function(req, res, next) {
    res.redirect('/api/');
});


router.get("/login/twitter", passport.authenticate('twitter'));



router.get('/twitter/return', 
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
})









router.get("/profile",  function(req, res, next) {
if(req.user){
return User.findById(req.params.id).exec()
.then(respondWithResult(res))
.catch(handleError(res));
}else{
res.redirect("/login");
}
    // return User.findById(req.params.id).exec()
    // .then(handleEntityNotFound(res))
    // .then(respondWithResult(res))
    // .catch(handleError(res));
});

module.exports = router;
