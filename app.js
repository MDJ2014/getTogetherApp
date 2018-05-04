'use strict';

// load modules
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var jsonParser=require("body-parser").json;
//var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose      = require('mongoose');
const passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
const session = require('express-session');
const User = require('./models/users');
var MongoStore = require("connect-mongo")(session);
const config = require('./config');




const apiRoutes = require('./api');

const app = express();


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname,'GetTogether/dist')));
app.use(jsonParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));




//send all other requests to Angular
// app.get('*',(res,req)=>{
//    res.sendFile(path.join(__dirname,'public/index.html'));
// })


// app.route('/*')
//         .get((req, res) => {
//           res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
//         });


app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Conatent-Type, Accept');
			res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
			next();
});


//*********************DATABASE**************************************** */
var dbName = "getTogetherTest"

mongoose.connect('mongodb://localhost:27017/' + dbName, function(err){
	if(err){console.log("Error connecting to database")}
	else{console.log('Connection to ' +dbName + ' database successful');}
});

mongoose.Promise = global.Promise;

// Mongodb connection
//mongoose.connect('mongodb://localhost:27017/' + dbName);  /**,{ autoIndex: false }); add for production */
const db = mongoose.connection;

//********************DATABASE***************************************** */




//Session Config for Passport and MongoDb
var sessionOptions={
secret: "This is a secret",
resave: true,
saveUninitialized: true,
store: new MongoStore({
  mongooseConnection: db
})
};

app.use(session(sessionOptions));

//Initialized Passport
app.use(passport.initialize());

//restore session

app.use(passport.session());



passport.use(new TwitterStrategy({
  consumerKey: config.twitterAuth.TWITTER_CONSUMER_KEY,
  consumerSecret: config.twitterAuth.TWITTER_CONSUMER_SECRET,
  callbackURL: config.twitterAuth.callBackUrl,
  passReqToCallback: true
}, function(token, tokenSecret, profile, cb) {
  User.findOrCreate({ twitterId: profile.id 
  }, 
  // {
  //   userName: profile.screen_name,
  //   photo: profile_image_url    
  //   }, 
    {
      upsert:true
    },
    function (err, user) {
    return cb(err, user);
  });
}));










passport.serializeUser(function(user, done){
  done(null, user._id);
});

passport.deserializeUser(function(userId, done){
User.findById(userId, function(err, user){
done(err,user);
});
});

app.use('/api', apiRoutes);



// catch 404 and forward to global error handler
app.use(function(req, res, next) {
    var err = new Error('File Not Found');
		//return res.render('index');
    err.status = 404;
    next(err);
  });

  // Express's global error handler
  app.use(function(err, req, res, next) {

    res.status(err.status || 500);
    var err = new Error('File Not Found');
		//return res.render('index');
    err.status = 500;
    next(err);
  });






module.exports = app;
