const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const name = "";
const loc = "";
const bio = "";
const linkedIn = "";
const gitHub = ""

getInfo();

async function getInfo() {
  try {
    const {} = await inquirer.prompt(
    [{
        type: "input",
        message: "What is your name:",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your location:",
        name: "location"
    },
    {
        type: "input",
        message: "Please enter some details about yourself:",
        name: "bio"
    },
    {
        type: "input",
        message: "Please copy and paste your LinkedIn url:",
        name: "linkedin"
    },
    {
        type: "input",
        message: "Please enter your GitHub handle:",
        name: "github"
    }
    ])
        } catch (err) {
            console.log(err);
        }
    .then(function (response) {
        name = response.name
        loc = response.location
        bio = response.bio
        linkedIn = response.linkedin
        gitHub = response.github
        if (err) {
            return console.log(err);
          }
        console.log(name)
        console.log(loc)
        console.log(bio)
        console.log(linkedIn)
        console.log(gitHub)


    });

// Name request


// GitHub request
// getGitHub();

// async function getGitHub() {
//   try {
//     const { gitHubAcct } = await



//       });
//     });
//   });


// string temp literals, see 09-23
// async promises, see 09-38
// async constructors, see 09-36
// github api pull on requested handle
// 
//
// instantiate requirements
// declare global constants (name as string, location as string, bio as string, linkedin link as string, github handle string)
// 
// 
// 
// 
// 
// 