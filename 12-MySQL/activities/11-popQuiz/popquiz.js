var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "popquizDB"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("connect as " + connection.threadId + "\n");
    readQuiz()
});

function readQuiz() {
    console.log("Selecting all quiz...\n");
    connection.query("SELECT * FROM quiz", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}