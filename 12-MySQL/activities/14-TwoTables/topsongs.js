var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "topsongsDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

var start = function start() {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "What would you like to search?",
        choices: ["Search all data for songs sung by a specific artist",
            "Search all data for all artists who appear within the top 5000 more than once",
            "Search all data contained within a specific range",
            "Search all data for a specific song in the top 5000 and returns the data for it"]
    })
        .then(function (answer) {
            if (answer.start === "Search all data for songs sung by a specific artist") {
                artistSearch();
            }
            else if (answer.start === "Search all data for all artists who appear within the top 5000 more than once") {
                repeatArtistSearch();
            }
            else if (answer.start === "Search all data contained within a specific range") {
                rangeSearch();
            }
            else if (answer.start === "Search all data for a specific song in the top 5000 and returns the data for it") {
                songSearch();
            }
        });
}

var artistSearch = function artistSearch() {
    inquirer.prompt(
        {
            name: "artist",
            type: "input",
            message: "What artist would you like to search for?"
        })
        .then(function (resp) {
            connection.query("SELECT artist, song, year FROM top5000 WHERE artist = ?", resp.artist,
                function (err, res) {
                    if (err) throw err;
                    for (var i = 0; i < res.length; i++) {
                        console.log(res[i].artist + ", " + res[i].song + ", " + res[i].year)
                    }
                    console.log("================")
                    start();
                });
        })
};

var songSearch = function songSearch() {
    inquirer.prompt(
        {
            name: "song",
            type: "input",
            message: "What song would you like to search for?"
        })
        .then(function (resp) {
    connection.query(
        "SELECT * FROM top5000 WHERE song = ?",resp.song,
        function (err, res) {
            console.log("Position: " +
            res[0].position +
            " || Song: " +
            res[0].song +
            " || Artist: " +
            res[0].artist +
            " || Year: " +
            res[0].year
        );
            console.log("================")
            start();
        });
    })
};

var repeatArtistSearch = function repeatArtistSearch() {
    var query = connection.query(
        "SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 1",
        function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist)
            }
            console.log("================")
        })
}

var rangeSearch = function rangeSearch() {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE position BETWEEN ? and ?",
        function (err, res) {
            console.log(res);
            console.log("================")
        })
}


SELECT top5000.artist, top5000.song, top5000.year FROM top5000 INNER JOINS topalbums ON year