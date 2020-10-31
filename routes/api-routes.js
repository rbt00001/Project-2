module.exports = function(app) {
  // get top 10 scores
  app.get("/api/scores/top10", (req, res) => {});

  app.get("/api/scores/:userId", (req, res) => {});

  // post user's score (data expected to include category)
  app.post("/api/scores", (req, res) => {});

  app.post("/api/signup", (req, res) => {});

  // ToDo : use passport.authenticate() method to perform local strategy authentication
  app.post("/api/login", passport.authenticate(), (req, res) => {});
};
