// Require express
var express = require("express");
var app = express();
// require("dotenv").config();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes.js")(app);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

