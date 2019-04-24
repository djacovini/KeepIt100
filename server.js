require("dotenv").config();
const express = require("express");
// const passport = require("passport");
const routes = require("./routes");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 4000;

//try to fix google redirect
// app.set("view engine", "ejs")
// app.get("/", (req,res) => {
//   res.render("about")
// })



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport
// app.use(passport.initialize());
// require("./config/passport");

// Add routes, both API and view
app.use(routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
})

module.exports = app;