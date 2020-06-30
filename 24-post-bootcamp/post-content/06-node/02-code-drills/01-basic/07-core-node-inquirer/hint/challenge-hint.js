// require inquirer
const inquirer = require("inquirer")

// define our initial quotes
quotes = [
  {
    author: "Albus Dumbledore",
    quote: "It is our choices, Harry, that show what we truly are, far more than our abilities"
  },
  {
    author: "Sirius Black",
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals"
  }
]

// call on the function that displays our main menu
start()

// define a function that displays the main menu
function start() {
  console.log("Welcome to the Library!\n");
  menu()
}
// prompt the user to choose between three options
function menu() {
  inquirer.prompt([
    {
      type: "list",
      name: "menuChoice",
      message: "What would you like to do?",
      choices: ["View a quote", "Add a quote", "Exit"]
    }
  ]).then(function (userChoice) {

    // depending on the user selection, 
    switch (userChoice.menuChoice) {

      // call on a function to show the quotes
      case "View a quote":
        showQuotes();
        break

      // call on a function to add a new quote
      case "Add a quote":
        addQuote();
        break
                  
      // exit the application by not calling on any functions
      case "Exit":
        console.log("\nCome back soon!\n")
      }
    })
  }
        

// define a function that will show the user all the quotes to choose from
function showQuotes(){

  // create a new array of all the authors of the quotes to use for the user prompt
  let authors = []
  for (let i=0; i<authors.length; i++){
    authors.push(i + ")" + quotes[i].author)
  }
  // ask the user to choose which author's quote they want to see
  inquirer.prompt([
    {
      type: "list",
      name: "authorChoice",
      message: "Show which author's quote?",
      choices: authorChoices
    }
  ]).then(function(authorChoices) {

  })


    // find the quote by the chosen author and display it



}
// define a function that lets the user add quotes to the display list
function addQuote(){

  // ask the user to input the author and then the quote



    // add the new quote with the corresponding author into our quote storage

}
