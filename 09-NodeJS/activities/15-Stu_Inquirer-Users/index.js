var inqiurer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: ["HTML","CSS","JS","English","Spanish","French","Bad English"]
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "prefComm",
      choices: ["email","phone","text","silence"]
    }
  ])
  .then(function(data) {
    console.log(data)

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
