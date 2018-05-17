"use strict";
const express = require("express");
const router = new express.Router();

var applyPatch = require('fast-json-patch');
var User = require('../models/users').User;
var Plan = require('../models/plans').Plan;


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const tconfig = require('../tconfig');
const Twit = require('twit');

const T = new Twit(tconfig);



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


function tweet(plan){
  T.post('statuses/update', { status: "I am going to " +plan.name + " in "+ plan.location.city+", "+plan.location.state+ " on "+ plan.month+" "+ plan.day+ " at "+ plan.time + plan.ampm+ ".  Tweet if you want to go. "}, function(err, data, response) {
   
  })
}

function editTweet(plan){
  T.post('statuses/update', { status: "I had to change my plans. I'm still going to " +plan.name + " in "+ plan.location.city+", "+plan.location.state+ ". But my new time to go is on "+ plan.month+" "+ plan.day+ " at "+ plan.time + plan.ampm+ ".  Tweet if you want to go at that time. "}, function(err, data, response) {
  
  })
}

function cancelTweet(plan){
  T.post('statuses/update', { status: "I had to cancel my plans.  I will not be able to go to  " +plan.name + " in "+ plan.location.city+", "+plan.location.state+ " on "+ plan.month+" "+ plan.day+ " at "+ plan.time + plan.ampm+ ". My appologies to all. "}, function(err, data, response) {
   })
}


router.get("/",  function(req, res, next) {
    Plan.find({}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
    res.redirect('/api/');
});




router.get("/:id",  function(req, res, next) {
 
return Plan.find({user: req.params.id}).exec()
//return Plan.findById(req.params.id).exec()
.then(handleEntityNotFound(res))
.then(respondWithResult(res))
.catch(handleError(res));
});







router.post("/",  function(req, res, next) {
  return Plan.create(req.body)
  .then(tweet(req.body))
   .then(respondWithResult(res, 201))
   .catch(handleError(res));
});



//router.post("/new",  function(req, res, next) {
    // return Plan.create(req.body).exec()
    // .then(function(plan){

    //     var rsvp = new Rsvp({
    //         user:req.headers.user,
    //         planId: plan._id
    //        });

    //        rsvp.save(err => {  
    //         if (err) {
    //           return res.status(500).send(err);
    //         }
        
    //     })
    // })
    // .then(respondWithResult(res, 201))
    // .catch(handleError(res));




  


/* 

    var plan = new Plan({
        user: req.headers.user,
        locName: req.body.locName,
        locId: req.body.locId,
        locAdd: req.body.locAdd,
        locPhone: req.body.locPhone,
        locImage: req.body.locImage,
        lat : req.body.lat,
        long: req.body.long,
        locUrl: req.body.locUrl,
        rating: req.body.rating,
        price: req.body.price,
        planDate: req.body.planDate,
        planTime: req.body.planTime,
        rsvps: req.body.rsvps
      });
      


      plan.save(e=>{
        if (e) {
          return next(error);
         }
      });
 
    var noti= new Notification({
      inviter:plan.user,
      planId: plan._id,
      invitee: 
     });
  
  
  rsvp.save(err => {  
      if (err) {
        return res.status(500).send(err);
      }
   }).then(() => res.status(204).end());

*/
//})

//edit form path
router.get("/edit/:id",  function(req, res, next) {
    return Plan.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
});


//find plan by id and update
router.put("/edit/:id",  function(req, res, next) {

// if(req.body._id) {
//     Reflect.deleteProperty(req.body.id);
//   }
  //if(req.headers.user === req.body._id){
  // return Plan.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
  //}

return Plan.findOneAndUpdate({_id: req.params.id}, req.body, {new:true,upsert:false}).exec()
.then(editTweet(req.body))
.then(respondWithResult(res))
.catch(handleError(res));
});



//update rsvps
// router.put("/rsvps/:id",  function(req, res, next) {

//   if(req.body._id) {
//       Reflect.deleteProperty(req.body, '_id');
//     }
//     return Plan.findOneAndUpdate({_id: req.params.id}, {$addToSet: {rsvps: req.body.rsvps}}, {upsert: true, new: 
//       true,  setDefaultsOnInsert: true, runValidators: true}).exec()
//       .then(respondWithResult(res))
//       .catch(handleError(res));
//   });




router.delete("/delete/:id",  function(req, res, next) {
     return Plan.findById({_id: req.params.id}).exec()
    .then(handleEntityNotFound(res))
    // .then(cancelTweet(res))
     .then(removeEntity(res))
    .catch(handleError(res));
});





module.exports = router;