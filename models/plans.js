'use strict';


var mongoose = require('mongoose');
//var validator = require('validator');
//var bcrypt = require('bcrypt');



var PlanSchema = new mongoose.Schema({

user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
id:{
    type: String
},
alias:{
    type: String
},
name:{
    type: String
},
image_url:{
    type: String
},
is_closed:{
    type: String
},
url:{
    type: String
},
review_count:{
    type: Number
},
categories:[
    {
        alias:{type: String},
        title:{type: String}
    }
],
rating:{
    type: Number
},
coordinates:{
    latitude:{type: Number},
    longitude:{type: Number}
},
transactions:[
    {
        type: String
    }
],
price:{
    type: String
},
location:{
    address1:{type: String},
    adderss2:{type: String},
    address3:{type: String},
    city:{type: String},
    zip_code:{type: String},
    country:{type: String},
    state:{type: String},
},
display_phone:{type: String},

month:{
    type: String
},
day:{
    type: String
},
year:{
    type: String
},
time:{
    type: String
},
ampm:{
    type: String
},

   rsvps:[
    {
        name:{
            type:String
        }
    }
  ],
 
  versionKey: false
});










var Plan = mongoose.model("Plan",PlanSchema);
module.exports.Plan=Plan;
