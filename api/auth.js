"use strict";
const express = require("express");
const router = new express.Router();
const passport = require('passport');
const tconfig = require('../tconfig');
var User = require('../models/users').User;
var Plan = require('../models/plans').Plan;


var applyPatch = require('fast-json-patch');

const Twit = require('twit');





// var firebase = require("firebase");

// var firebaseui = require('firebaseui');










// function respondWithResult(res, statusCode) {
//     statusCode = statusCode || 200;
//     return function(entity) {
//       if(entity) {
//        return res.status(statusCode).json(entity);
//       }
//       return null;
//     };
//   }

  // function patchUpdates(patches) {
  //   return function(entity) {
  //     try {
  //       applyPatch(entity, patches, /*validate*/ true);
  //     } catch(err) {
  //       return Promise.reject(err);
  //     }

  //     return entity.save();
  //   };
  // }

  // function removeEntity(res) {
  //   return function(entity) {
  //     if(entity) {
  //       return entity.remove()
  //         .then(() => res.status(204).end());
  //     }
  //   };
  // }

  // function handleEntityNotFound(res) {
  //   return function(entity) {
  //     if(!entity) {
  //       res.status(404).end();
  //       return null;
  //     }
  //     return entity;
  //   };
  // }

  // function handleError(res, statusCode) {
  //   statusCode = statusCode || 500;
  //   return function(err) {
  //     res.status(statusCode).send(err);
  //   };
  // }

//   function getUser(data) {
//     let user = data[0];
//     let newUser = {};
//     newUser.name = user.name;
//     newUser.screen_name = user.screen_name;
//     newUser.profile_image_url_https = user.profile_image_url_https;
//     newUser.profile_banner_url = user.profile_banner_url;
//     newUser.friends_count = user.friends_count;

//     return newUser;
// };
//get user's friend data
// function getFriendData(data) {
//     let friends = data.users;
//     let allFriends = [];
//     for (let i = 0; i < friends.length; i++) {
//         let friend = friends[i];
//         let newFriend = {};
//         newFriend.name = friend.name;
//         newFriend.screen_name = friend.screen_name;
//         newFriend.profile_image_url_https = friend.profile_image_url_https;
//         allFriends.push(newFriend);
//     }
//     return allFriends;
// };





router.get("/",  function(req, res, next) {
   // res.redirect('/api/');
   const T = new Twit(req.body);

console.log(req.body);

   T.get("account/verify_credentials").then(authUser => {
    const user = authUser.data.screen_name;
    //user promises to access each piece of information
    Promise.all([
        T.get('users/lookup', { screen_name: user }),
         T.get('friends/list', { count: 5 })
 
    ])

    //take the data and extract information into objects
    .then(([userData, friendData]) => {
        let currentData = {
                user: getUser(userData.data),
                friends: getFriendData(friendData.data)
              
            }
       
            //then return  information from the currentData object
            return res.status(200).json(currentData);
        //required catch blocks for promises
    }).catch(error => {
        throw error;
    })

}).catch(error => {

    throw error;
})


});



// router.get('/login', function(req,res){


// })

// router.get("/login/twitter", passport.authenticate('twitter'));



// router.get('/twitter/return', 
//   passport.authenticate('twitter', { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
})









// router.get("/profile",  function(req, res, next) {
// if(req.user){
// return User.findById(req.params.id).exec()
// .then(respondWithResult(res))
// .catch(handleError(res));
// }else{
// res.redirect("/login");
// }
    // return User.findById(req.params.id).exec()
    // .then(handleEntityNotFound(res))
    // .then(respondWithResult(res))
    // .catch(handleError(res));
//});

module.exports = router;
