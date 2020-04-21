// Dependencies
var express = require("express");
var mysql = require("mysql");
var parser = require("body-parser")
// Create express app instance.
var app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3050;
// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "housestarkdb"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
app.get("/", function(req,res){
    connection.query("SELECT * from starks", function(err, result){
        if (err) throw err;
        let fullhtml = writeCharacters(result)
        // Finally we send the user the HTML file we dynamically created.
        res.send(fullhtml);
    })
})
app.get("/:boolean", function(req,res){
    let type = req.params.boolean
    connection.query(`SELECT * from starks WHERE ${type}= true`, function(err, result){
        if (err) throw err;
        let fullhtml = writeCharacters(result)
        // Finally we send the user the HTML file we dynamically created.
        res.send(fullhtml);
    })
})

function writeCharacters (result) {
    var html = "<h1> House Stark Children </h1>";
    // Here we begin an unordered list.
    html += "<ul>";
    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Name: " + result[i].name + " </p>";
      html += "<p>Alive?: " + result[i].alive + " </p>";
      html += "<p>Walks?: " + result[i].walks + " </p>";
      html += "<p>Assassin?: " + result[i].assassin + " </p></li>";
    }
    // We close our unordered list.
    html += "</ul>";
    html += "<hr/>";
    html += "<a href='/' >House Stark</a><br/>"
    html += "<a href='/alive' >Is alive?</a><br/>"
    html += "<a href='/walks' >Walks?</a><br/>"
    html += "<a href='/assassin' >Is an assassin?</a>"
    return html
}
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });