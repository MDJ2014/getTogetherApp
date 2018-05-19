"use strict";
const express = require("express");
const router = new express.Router();
const yelp = require("yelp-fusion");
const config = require("../config");

router.get("/", function(req, res, next) {
  res.send("Home");
});
//route for yelp search
router.post("/search", function(req, res, next) {
  var searchRequest = req.body;

  const client = yelp.client(config.yelpAuth.yelpApiKey);

  client
    .search(searchRequest)
    .then(response => {
      const results = response.jsonBody;
      const prettyJson = JSON.stringify(results, null, 4);
      res.send(prettyJson);
    })
    .catch(e => {
      console.log(e);
    });
});
//index to routes
const userRoutes = require("./users");
router.use("/users", userRoutes);

const planRoutes = require("./plans");
router.use("/plans", planRoutes);

module.exports = router;
