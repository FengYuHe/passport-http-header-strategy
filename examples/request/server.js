var express = require('express');
var app = express();
var passport = require('passport');
var headerStrategy = require('passport-http-header-strategy').Strategy;
app.use(passport.initialize());

passport.use(new headerStrategy({header:'X-APP-TOKEN', passReqToCallback: true},
  function(req, token, done) {
  	//do something
  	done();
  }
));

var authenticate = passport.authenticate('bearer', {session: false, failWithError: true});

app.use('/', function(req, res){
	authenticate(req, res, function (err) {
		//do something
	})
});

app.listen(3000);