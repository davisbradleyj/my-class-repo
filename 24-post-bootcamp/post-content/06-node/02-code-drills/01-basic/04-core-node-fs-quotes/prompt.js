const fs = require('fs')
let args = []

for (let i=2;i<process.argv.length;i++) {
    args.push(process.argv[i])
}

// console.log(args)

var quote = args[args.length -1]

// console.log(quote)

args.pop()
args.pop()

// console.log(args)
// console.log(quote)

var person = args.join(" ")
// console.log(person)

let fullQuote = []

quote = '"' + quote + '"'

fullQuote.push(quote)
fullQuote.push("-")
fullQuote.push(person)

// console.log(fullQuote)

fullQuote = fullQuote.join(" ")

// console.log(fullQuote)

fs.appendFile('quotes.txt',"; "+fullQuote,function(err,data){
    console.log("Quote Added!")
})