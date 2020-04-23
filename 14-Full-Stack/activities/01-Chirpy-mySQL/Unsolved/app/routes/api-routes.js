// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", function (req, res) {
    connection.query("SELECT * FROM chirps", function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a chirp
  app.post("/api/new", function (req, res) {
    connection.query("INSERT INTO chirps (author, chirp, published) VALUES (?,?,?)", [req.body.author, req.body.chirp, req.body.published], function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
};
