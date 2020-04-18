var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "play_listDB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
//   afterConnection1();
//   afterConnection2();
//   afterConnection3();
//   afterConnection4();
//   connection.end();
createNew();
});
    // function afterConnection1() {
    // connection.query("SELECT * FROM playlist", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // });
    // }
    // function afterConnection2() {
    // connection.query("SELECT * FROM playlist WHERE genre = 'folk' ", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // });
    // }
    // function afterConnection3() {
    // connection.query("SELECT * FROM playlist WHERE title = 'paint it black' ", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // });
    // }
    // function afterConnection4() {
    // connection.query("SELECT * FROM playlist WHERE artist = 'mura masa' ", function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // });
    // }
//CREATE 
    function createNew() {
        console.log("inserting new song")
        var query = connection.query(
            "INSERT INTO playlist SET ?",
            {
                title: "No Hope",
                artist: "DRAMA",
                genre: "Electro pop",
            },
            function(err, res) {
                console.log(res.affectedRows + "new song inserted!");
                updateSongs();
            }
        );
  // logs the actual query being run
        console.log(query.sql);
    }
function updateSongs() {
    console.log("updating song qualities");
    var query = connection.query(
        "UPDATE playlist SET ? WHERE ?",
        [
            {
                genre: "pop"
            },
            {
                title: "No Hope"
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + "song updateed!");
            deleteSong();
        }
    );
    console.log(query.sql);
}
function deleteSong() {
    console.log("deleted song");
    connection.query(
        "DELETE FROM playlist WHERE ?",
        {
            title: "paint it black"
        },
        function(err, res) {
            console.log(res.affectedRows + " song deleted");
            readSongs();
        }
    );
}
function readSongs() {
    console.log("Selecting all songs");
    connection.query("SELECT * FROM playlist", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    })
}