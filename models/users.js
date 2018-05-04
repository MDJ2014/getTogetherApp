'use strict';


var mongoose = require('mongoose');
//var validator = require('validator');
//var bcrypt = require('bcrypt');



var UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true]
     
      },  
      twitterId:{
            type: String
      },  
      twitterToken :{
            type: String
      }, 
 
      photo:{
          type:String
      },

      friends:[
       // { type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}
        {
            userName:{
                type:String
            }
        }
      ]
    //   notifications:[
    //       {type: mongoose.Schema.Types.ObjectId, ref: 'Notification'}
    //   ],

    //  userPlans:[
    //      {
    //          planId:{
    //              type: String
    //             }
    //         }
    //      ]
        
    //    // {
    //         {type: mongoose.Schema.Types.ObjectId, ref: 'Plan'}
    //         //planId:{
    //         //    type:String
    //        // }
    //    // }
    //   ]


});

// UserSchema.statics.authenticate = function(emailAddress,password,callback){
//     User.findOne({emailAddress:emailAddress})
//     .exec(function(err,user){
//             if(err){
//                 return callback(err);
//             }else if(!user){
//                 var error=new Error("User not found");
//                 error.status=401;
//                 return callback(error);
//             }
//             bcrypt.compare(password,user.password,function(err,result){
//                 if(result === true){
//                     return callback(null, user);
//                 }else{
//                     return callback();
//                 }
//             });
//     });
// }
/*
UserSchema.pre('save',function(next){
var user = this;
bcrypt.hash(user.password,10,function(err,hash){
    if(err){
       return next(err);
    }
    user.password=hash;
    next();
})
});

*/



var User = mongoose.model('User',UserSchema);

module.exports.User = User;