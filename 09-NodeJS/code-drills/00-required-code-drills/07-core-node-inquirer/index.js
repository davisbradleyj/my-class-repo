// require inquirer
const inquirer = require("inquirer");

// define our initial quotes
const str1 = [
    {
        author: "Corbin",
        quote: "You do not say that"
    },
    {
        author: "Brad",
        quote: "Kids say the strangest things"
    }
]

// call on the function that displays our main menu
start()
function start() {
    console.log("Let's guess a quote!")
    mainMenu();
}
// define a function that displays the main menu
function mainMenu() {
    // prompt the user to choose between three options
    inquirer.prompt([
        {
            type: "list",
            name: "quoteMenu",
            message: "What would you like to do with your quotes?",
            choices: ["Add quote", "Select quote", "Exit"]
        }
    ]).then(function (userChoice) {
        // depending on the user selection,
        switch (userChoice.quoteMenu) {
            // call on a function to show the quotes
            case "Select quote":
                selectQuote()
                break;
            // call on a function to add a new quote
            case "Add quote":
                addQuote()
                break;
            // exit the application by not calling on any functions
            case "Exit":
                console.log("See you next time!")
        }
    })
}
// define a function that will show the user all the quotes to choose from
function selectQuote() {
    // create a new array of all the authors of the quotes to use for the user prompt
    var authorChoices = [];
    for (var i = 0; i < str1.length; i++) {
        authorChoices.push(i + ") " + str1[i].author);
    }
    // ask the user to choose which author's quote they want to see
    inquirer.prompt([
        {
            type: "list",
            name: "authorChoice",
            message: "From which author would you like a quote?",
            choices: authorChoices
        }
    ]).then(function (userChoice) {
        // find the quote by the chosen author and display it
        var index = authorChoices.indexOf(userChoice.authorChoice);
        console.log(str1[index].quote);
        mainMenu();
    })
}
// define a function that lets the user add quotes to the display list
function addQuote() {
    // ask the user to input the author and then the quote
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the author's name: ",
            name: "author"
        },
        {
            type: "input",
            message: "Please enter the quote: ",
            name: "quote"
        }
    ]).then(function (userInput) {
        // add the new quote with the corresponding author into our quote storage
        str1.push({
            author: userInput.author,
            quote: userInput.quote});
        mainMenu();
    })
}
