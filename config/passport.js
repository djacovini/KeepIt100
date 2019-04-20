require("dotenv").config();
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});
passport.use(
 new GoogleStrategy(
  {
   clientID: "579057114129-836cah0isddulig0gufc1ucbscrd3shq.apps.googleusercontent.com",
   clientSecret: "gHzB9GA0hOcYzdWqhdAHUjsL",
   callbackURL: "https://keep-it-100.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   console.log(userData);
   done(null, userData);
  }
 )
);

// Exporting our configured passport
module.exports = passport;

