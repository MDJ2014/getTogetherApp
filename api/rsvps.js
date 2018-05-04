"use strict";
const express = require("express");
const router = new express.Router();


router.get("/",  function(req, res, next) {
    res.send("all Rsvps");
});

router.get("/:id",  function(req, res, next) {
    res.send("single Rsvps");
});


router.post("/",  function(req, res, next) {
    res.send("new Rsvps");
});

router.delete("/:id",  function(req, res, next) {
    res.send("delete rsvps");
});


module.exports = router;