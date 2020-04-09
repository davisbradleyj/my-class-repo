// require inquirer
const inquirer = require("inquirer");

// define our initial quotes
const str1 = [
  {
    quote = "You do not say that",
    person = Corbin
  },
  {
    quote = "Kids say the strangest things",
    person = Brad
  }
]

// call on the function that displays our main menu
mainMenu()

// define a function that displays the main menu
function mainMenu() {
  console.log("Let's guess a quote!")
}

  // prompt the user to choose between three options
  inquirer
  .prompt([
    {
    type: "list",
    message: "Would you like to play?",
    choices: 
      ["Yes",
      "No",
      ]
    }
    ])
  .then(answers => {
    if (answers.)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
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


