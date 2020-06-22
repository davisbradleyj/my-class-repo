// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs")
var arguments = [];
var quotes;
var person;
var message = "No quote attributed"

for (let i = 2; i<process.argv.length; i++) {
    arguments.push(process.argv[i])
}

person = arguments.join(" ")

fs.readFile("quotes.txt", "utf8", function(err,data) {
    quotes = data.split(";")
    for (let i=0; i<quotes.length; i++) {
        let quote = quotes[i].split("-");
        if (quote[1].toLocaleLowerCase() === person) {
            message = quote[0]
        }
    }
    console.log(message)
})

