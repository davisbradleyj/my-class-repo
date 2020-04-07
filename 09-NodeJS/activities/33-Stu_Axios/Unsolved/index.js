const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const arrayRepoNames = [];
inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios
      .get(queryUrl)
      .then(function (res) {
        // console.log(res.data);
        for (const repository of res.data){
          arrayRepoNames.push(repository.name)
        }
        arrayRepoNames.join()
        console.log(arrayRepoNames)
      });
  });


  //  axios.get(queryUrl).then(function(res) {  
  //    const repoName; = res.data.map(function(repo) {
  //    return repoName;
  //  });
//    const repoNamesStr = repoNames.join("\n")
//    fs write file
//    console.log (`Save ${repoNames.length} repos`)
//
//

