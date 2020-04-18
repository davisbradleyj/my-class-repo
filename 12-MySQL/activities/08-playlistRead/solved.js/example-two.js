var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "playlist_db"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("conection started");
    insertQuery();
    runQuery();
    updateQuery();
    runSecondQuery();
    deleteQuery();
});
function insertQuery() {
    var values = [
        ["weeknd", "angel", "rnb"],
        ["da baby", "bop", "rap"]
    ];
    connection.query("INSERT INTO songs (artist, title, genre) VALUES ?", [values], function(err, res){
        if(err) throw err;
        console.log(res, "res from insertQury");
    });
};
function runQuery() {
    connection.query("SELECT * FROM songs", function(err, res) {
        if(err) throw err;
        for(var i in res){
            console.log(`${res[i].id} | ${res[i].title} | ${res[i].artist} | ${res[i].genre} `);
        }    
    })
}
function updateQuery() {
    connection.query("UPDATE songs SET title='somehthing' WHERE artist=?",["da baby"], function(err, res){
        if(err) throw err;
    })
}
function deleteQuery() {
    connection.query("DELETE FROM songs WHERE artist=?", ["weeknd"], function(err,res){
        if(err) throw err;
    })
}
function runSecondQuery() {
    connection.query("SELECT * FROM songs WHERE artist='tupac'", function(err, res) {
        if(err) throw err;
        console.log("-".repeat(50))
        for(var i in res) {
            console.log(`${res[i].id} | ${res[i].title} | ${res[i].artist} | ${res[i].genre} `);
        }
        connection.end();
    })
}

