"use strict";
const express = require("express");
const router = new express.Router();
var Notification= require('../models/notifications').Notification;




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
    //list all of mine
    res.redirect("/api/");
});




router.get("/:id",  function(req, res, next) {
    return Notification.findById(req.params.id)
    .populate('plan')
    .populate('inviter')
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
 });




//post new noti
router.post("/",  function(req, res, next) {
    return Notification.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
});



router.delete("/delete/:id",  function(req, res, next) {
    return Notification.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
});




module.exports = router;