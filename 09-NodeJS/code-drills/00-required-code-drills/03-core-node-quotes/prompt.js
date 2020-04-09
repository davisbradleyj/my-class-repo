// // ======== You are given NOTHING to start with 😱 ========

// // take the command line index 2
// var arg1 = process.argv[2]
// // compare it to the contents of quotes.txt
// // var fs = require("fs")
// // console.log(fs)
// // switch(arg1) {
// //     case "Donald Trump"
        
// //multiple splits
// //read file once to pull everything into an array
// //split array into quotes-speaker groups
// //split quote and speaker (key)
// //index-1 for quote by index person
// //------------------------------------
// // "You miss 100% of the shots you don't take"-Michael Jordan.
// console.log(arg1)
// switch(arg1) {
//     case "Trump":
//         console.log("I have the best words");
//         break;
//     case "Dumbledore":
//         console.log("It does not do to dwell on dreams, and forget to live");
//         break;
//     case "Einstein":
//         console.log("E=MC^2");
//         break;
//     case "Vader":
//         console.log("I am your father");
//         break;
//     case "Gandalf":
//         console.log("A wizard is never late, nor early. He arrives precisely when he means to")
//         break;
//     case "Michael Jordan":
//         console.log("You miss 100% of the shots you don't take");
//         break;
//     default:
//         console.log("That person never said anything");   
//         break;
// }




var fs = require("fs");

// Keep track of user input
var args = [];
var fullQuotes;
var person;
var message = "That person never said anything"

//Handle names that are longer than one word
for (var i = 2 ; i < process.argv.length ; i++) {
  args.push(process.argv[i]);
    console.log(args)
}

//Turn the name into a single string
person = args.join(" ");
    console.log(person)

fs.readFile("quotes.txt", "utf8", function(error, data) {
  
  //Separate the quotes
  fullQuotes = data.split(";");
    console.log(fullQuotes)

//   fullQuotes = data.split(" said ");
//    console.log(fullQuotes)


  for (var i = 0 ; i < fullQuotes.length; i++) {
    //Separate the person from the quote
    var quote = fullQuotes[i].split("-");
    console.log(quote)
    console.log(quote[1])
    if (quote[1].toLocaleLowerCase() === person) {

      //change the default message to the quote in question
      message = quote[0];

    }
  }

  console.log(message)
});

