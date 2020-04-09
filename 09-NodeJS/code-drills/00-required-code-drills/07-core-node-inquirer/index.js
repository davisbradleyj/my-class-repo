// require inquirer
const inquirer = require("inquirer");

// define our initial quotes
const str1 = [
    {
        quote = "You do not say that",
        person = "Corbin"
    },
    {
        quote = "Kids say the strangest things",
        person = "Brad"
    }
]

// call on the function that displays our main menu
start(str1)

// define a function that displays the main menu
function start() {
    console.log("Let's guess a quote!")
    mainMenu();
}
function mainMenu() {
    // prompt the user to choose between three options
    inquirer
        .prompt([
            {
                type: "list",
                name: "quoteMenu",
                message: "What would you like to do with your quotes?",
                choices:
                    ["Add quote",
                    "Select quote",
                    "Exit"
                    ]
            }
        ])
        .then(function() {
            switch(answer) {
                case "Add quote":
                addQuote()
                break;

                case "Select quote":
                selectQuote()
                break;

                case "Exit":
                noExit()
                break;

                default:
                console.log("Please try Again")
                mainMenu()
            }

        })
        .catch(err => {
            console.log(err)
        });


    // depending on the user selection, 


      // call on a function to show the quotes



      // call on a function to add a new quote



      // exit the application by not calling on any functions





// define a function that will show the user all the quotes to choose from


  // create a new array of all the authors of the quotes to use for the user prompt



  // ask the user to choose which author's quote they want to see



    // find the quote by the chosen author and display it




// define a function that lets the user add quotes to the display list


  // ask the user to input the author and then the quote



    // add the new quote with the corresponding author into our quote storage

    }
