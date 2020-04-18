var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "top_songsDB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // byArtist("usher");
    start();
});

function start() {
    // byArtist("usher");

    inquirer.prompt(
        {
            type: "input",
            message: "Input artist name",
            name: "artist"
        }).then(function (res) {
            // if (err) throw err;
            console.log(res.artist);
            console.log("//////////////");
            artistSearch(res.artist)
            byArtist("usher")
        });
}

function byArtist(artist) {
    console.log("haksdfkjhsd")
    connection.query("SELECT position, song, year FROM top5000 WHERE ?", { artist: artist }, function (err, res) {
        console.log("IM HERE!!!");
        for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
    });
}

function artistSearch(artist) {
    console.log("haksdfkjhsd")
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          
        });
}
