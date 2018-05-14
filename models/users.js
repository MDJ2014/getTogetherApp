'use strict';


var mongoose = require('mongoose');




var UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true]
     
      },  
     userId:{
            type: String,
             unique: true,
             
      },  
    
       photo:{
          type:String
      },

    


});




var User = mongoose.model('User',UserSchema);

module.exports.User = User;