const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "zoo";
const collections = ["animals"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/all", (req, res) => {
  db.animals.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

use zoo
db.animals.insert({"name":"Panda", "numLegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"})
db.animals.insert({"name":"Dog", "numLegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"})
db.animals.insert({"name":"Lion", "numLegs":4, "class":"mammal", "weight": 300, "whatIWouldReallyCallIt":"Grumbles"})
db.animals.insert({"name":"Zebra", "numLegs":4, "class":"mammal", "weight": 500, "whatIWouldReallyCallIt":"Stripes"})
db.animals.insert({"name":"Chameleon", "numLegs":4, "class":"Reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"})

// TODO: Implement the remaining two routes

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", (req, res) => {
  db.animals.find.sort({ name:1 }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
app.get("/weight", (req, res) => {
  db.animals.find.sort({ weight:-1 }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
