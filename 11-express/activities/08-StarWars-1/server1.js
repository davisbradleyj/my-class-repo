// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var darthfarfar = {
  name: "Darth Far Far",
  role: "filth Lord",
  age: 5,
  forcePoints: 100000
}
// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE
var obiwankenobi = {
  name: "Obi-Wan Kenobi",
  role: "Jedi Master",
  age: 39,
  forcePoints: 1300
}

var benkenobi = {
  name: "Ben Kenobi",
  role: "Hermit",
  age: 57,
  forcePoints: 1500
}

var jedi = [obiwankenobi, yoda, benkenobi]
//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});

app.get("/farfarwittles", function(req, res) {
  res.json(darthfarfar);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//
app.get("/obiwankenobi", function(req, res) {
  res.json(obiwankenobi);
});

app.get("/jedi", function(req,res) {
  res.json(jedi);
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
