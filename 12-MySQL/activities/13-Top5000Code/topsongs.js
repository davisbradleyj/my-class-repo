var mysql = require("mysql");

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
    one();
    two();
    three();
    // four();
    connection.end();
});

function one() {
    var query = connection.query(
        "SELECT artist, song, year FROM top5000 WHERE artist = 'Ace of Base'",
        function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(res[i].artist + ", " + res[i].song + ", " + res[i].year)
            }
            console.log("================")
        });
};

function two() {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE song = 'The Sign'",
        function (err, res) {
            console.log(res);
            console.log("================")
        })
}

function three() {
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

function four() {
    var query = connection.query(
        "SELECT * FROM top5000 WHERE position BETWEEN ? and ?",
        function (err, res) {
            console.log(res);
            console.log("================")
        })
}
