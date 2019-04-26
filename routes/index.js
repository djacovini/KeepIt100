const path = require("path");
var db = require("../models");
const router = require("express").Router();
//const apiRoutes = require("./api");
const passport = require("passport");
module.exports = function(app) {

// Get route for retrieving a single recipe
app.get("/api/companies/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Author
  db.Company.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbCompany) {
    console.log("this route works");
    console.log(dbCompany);
    res.json(dbCompany);
  });
});
}

// API Routes
//router.use("/api", apiRoutes);

/* GET Google Authentication API. */
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/", session: false }),
//   function(req, res) {
//       var token = req.user.token;
//       res.redirect("http://localhost:3000/?token=" + token);
//   }
// );

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

