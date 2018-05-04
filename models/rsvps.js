'use strict';


var mongoose = require('mongoose');
//var validator = require('validator');
//var bcrypt = require('bcrypt');



var rsvpSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
 
       
     planId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Plan'
        }

        

});




var Rsvp = mongoose.model('Rsvp',rsvpSchema);

module.exports.Rsvp = Rsvp;