const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // get top 10 scores
  app.get("/api/scores/top10", (req, res) => {

  });

  app.get("/api/scores/:userId", (req, res) => {

  });

  // post user's score (data expected to include category)
  app.post("/api/scores", (req, res) => {

  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
  });

  // ToDo : use passport.authenticate() method to perform local strategy authentication
  app.post("/api/login", passport.authenticate(), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
  });
};
