"use strict";
const express = require("express");
const router = new express.Router();
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


router.get("/:id",  function(req, res, next) {
  return User.findById(req.params.id).exec()
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res));
});




router.post("/",  function(req, res, next) {

if(User.find({userId:req.body})){
  return (console.log('Name exists already'));
}else{
  return User.create(req.body)
  .then(respondWithResult(res, 201))
  .catch(handleError(res));
}



});



//update user
router.put("/edit/:id",  function(req, res, next) {

  if(req.body._id) {
      Reflect.deleteProperty(req.body, '_id');
    }
    return User.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {upsert: true, new:
      true,  setDefaultsOnInsert: true, runValidators: true}).exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
  });




//update User plan
router.put("/userplan/:id",  function(req, res, next) {

    if(req.body._id) {
        Reflect.deleteProperty(req.body, '_id');
      }
      return User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {userPlans: req.body.userPlans}}, {upsert: true, new:
        true,  setDefaultsOnInsert: true, runValidators: true}).exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
    });


//update friends
    router.put("/friends/:id",  function(req, res, next) {

      if(req.body._id) {
          Reflect.deleteProperty(req.body, '_id');
        }
        return User.findOneAndUpdate({_id: req.params.id}, {$addToSet: {friends: req.body.friends}}, {upsert: true, new:
          true,  setDefaultsOnInsert: true, runValidators: true}).exec()
          .then(respondWithResult(res))
          .catch(handleError(res));
      });

    /*
    router.delete("/delete/:id",  function(req, res, next) {
        return Plan.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
    });
*/

module.exports = router;