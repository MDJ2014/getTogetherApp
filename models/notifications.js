'use strict';


var mongoose = require('mongoose');
//var validator = require('validator');
//var bcrypt = require('bcrypt');



var NotificationSchema = new mongoose.Schema({
    inviter:{
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    invitee: { type : String
       // type: mongoose.Schema.Types.ObjectId, ref: 'User'
        },
        plan: {
          type: mongoose.Schema.Types.ObjectId, ref: 'Plan'
         // type : String
            }
              

});




var Notification = mongoose.model('Notification',NotificationSchema);

module.exports.Notification = Notification;