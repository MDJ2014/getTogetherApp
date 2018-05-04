"use strict";
const express = require("express");
const router = new express.Router();
const yelp = require('yelp-fusion');
const config = require('../config');


router.get("/",  function(req, res, next) {
    res.send("Get home");
});

router.get("/about",  function(req, res, next) {
    res.send("About");
});

router.post("/search",  function(req, res, next) {
    // var searchRequest = {
    //     'location': req.body,
    //     'limit': 50
    //  };
    var searchRequest = req.body;
  
     const client = yelp.client(config.yelpAuth.yelpApiKey);
  
  
    client.search(searchRequest).then(response => {
  
      const results = response.jsonBody;
      const prettyJson = JSON.stringify(results, null, 4);
      res.send(prettyJson);
   
     }).catch(e => {
       console.log(e);
     });
  
     
      });


const authRoutes = require('./auth');
router.use('/auth', authRoutes);

const userRoutes = require('./users');
router.use('/users', userRoutes);


const planRoutes = require('./plans');
router.use('/plans', planRoutes);


//const rsvpRoutes = require('./rsvps');
//router.use('/rsvps', rsvpRoutes);

//const inviteeRoutes = require('./invitees');
//router.use('/invitees', inviteeRoutes);

const notiRoutes = require('./notifications');
router.use('/notifications', notiRoutes);














    module.exports = router;