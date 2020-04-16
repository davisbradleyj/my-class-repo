var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "playlistdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createSong();
});

// title,artist,genre
function createSong() {
    console.log("Inserting a new song...\n");
    var query = connection.query(
        "INSERT INTO song SET ?",
        {
            title: "The Sound of Silence",
            artist: "Simon & Garfunkel",
            genre: "Folk"
        },
        function (res) {
            console.log(res.affectedRows + " song inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            updateSongs();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function updateSongs() {
    console.log("Updating Sinatra...\n");
    var query = connection.query(
        "UPDATE songs SET ? WHERE ?",
        [
            {
                genre: "Pop"
            },
            {
                artist: "Frank Sinatra"
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " song updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteSong();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function deleteSong() {
    console.log("Deleting Guns N Roses...\n");
    connection.query(
        "DELETE FROM songs WHERE ?",
        {
            artist: "Guns N Roses"
        },
        function (err, res) {
            console.log(res.affectedRows + " song deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readSongs();
        }
    );
}

function readSongs() {
    console.log("Selecting all songs...\n");
    connection.query("SELECT * FROM songs", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}