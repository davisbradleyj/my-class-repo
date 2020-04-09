// pushing inputs together
// appending into an array


// create string
// concat inputs

// arg = fileString

// 
// 
// 
// 

// fileString = fileString + quoteMightBe
var fs = require("fs");
var arg = [];
// review command line entry
for (var i=2; i<process.argv.length; i++) {
    arg.push(process.argv[i]);
    console.log(arg);
};
// declare quote portion of entry
var quote = args[args.length-1];
console.log(quote);
args.pop(); args.pop();
// set persons name
var person = args.join(" ");
//establish array name that will have components "appended"
var fullQuote = [];
//form quote
quote = '"' + quote + '"';
console.log(quote);
//add quote to array
fullQuote.push(quote);
console.log(fullQuote);
// add dash to separate quote from name
fullQuote.push("-");
// add name
fullQuote.push(person);
// make string
fullQuote = fullQuote.join(" ");

// add to string
fs.appendFile("quotes.txt", ";"+fullQuote, function(error, data) {
    console.log("Quote added!")
  });
  
  