"use strict";
const express = require("express");
const router = new express.Router();
var applyPatch = require("fast-json-patch");
var User = require("../models/users").User;
var Plan = require("../models/plans").Plan;
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const tconfig = require("../tconfig");
const Twit = require("twit");
const T = new Twit(tconfig);


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

function patchUpdates(patches) {
  return function(entity) {
    try {
      applyPatch(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove().then(() => res.status(204).end());
    }
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


//function for tweeting a plan
function tweet(plan) {
  T.post(
    "statuses/update",
    {
      status:
        "I am going to " +
        plan.name +
        " in " +
        plan.location.city +
        ", " +
        plan.location.state +
        " on " +
        plan.month +
        " " +
        plan.day +
        " at " +
        plan.time +
        plan.ampm +
        ".  Tweet if you want to go. "
    },
    function(err, data, response) {}
  );
}

//function for tweeting an edited plan
function editTweet(plan) {
  T.post(
    "statuses/update",
    {
      status:
        "I had to change my plans. I'm still going to " +
        plan.name +
        " in " +
        plan.location.city +
        ", " +
        plan.location.state +
        ". But my new time to go is on " +
        plan.month +
        " " +
        plan.day +
        " at " +
        plan.time +
        plan.ampm +
        ".  Tweet if you want to go at that time. "
    },
    function(err, data, response) {}
  );
}
//function for tweeting a cancelled plan
function cancelTweet(plan) {
  T.post(
    "statuses/update",
    {
      status:
        "I had to cancel my plans.  I will not be able to go to  " +
        plan.name +
        " in " +
        plan.location.city +
        ", " +
        plan.location.state +
        " on " +
        plan.month +
        " " +
        plan.day +
        " at " +
        plan.time +
        plan.ampm +
        ". My appologies to all. "
    },
    function(err, data, response) {}
  );
}

router.get("/", function(req, res, next) {
  res.redirect("/");
});

//find plan by id
router.get("/:id", function(req, res, next) {
  return Plan.find({ user: req.params.id })
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
});

//save a plan and tweet
router.post("/", function(req, res, next) {
  return Plan.create(req.body)
    .then(tweet(req.body))
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
});

//edit form path
router.get("/edit/:id", function(req, res, next) {
  return Plan.findById(req.params.id)
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
});

//update a plan and tweet
router.put("/edit/:id", function(req, res, next) {
  return Plan.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    upsert: false
  })
    .exec()
    .then(editTweet(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
});
//delete a plan and tweet
router.delete("/delete/:id", function(req, res, next) {
  Plan.findById({ _id: req.params.id })
    .exec()
    .then(plan => {
      cancelTweet(plan);
    });

  return Plan.findById({ _id: req.params.id })
    .exec()

    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
});

module.exports = router;
