// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...
const axios = require("axios");
const fs = require("fs");

// Grab or assemble the movie name and store it in a variable called "movieName"
let args = process.argv;
let movieName = "";
for (let i = 2; i < args.length; i++) {
  if (i < args.length && i > 2) {
    movieName = movieName + "+" + args[i];
  } else {
    movieName += args[i]
  }
}
console.log(movieName)
fs.appendFile("movies.txt", movieName+ ", ", function(err) {
  if (err) {
    return console.log(err);
  }
});
// ...


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...
axios.get(queryUrl)

// If the request with axios is successful
// ...
  .then(
  function(res) {
    // Then log the Release Year for the movie
    // ...
    console.log(res.data);
    console.log("Release year: " + res.data.Year);
  })
  .catch(
    function(err){
      if (err.res) {
        console.log(err.res.data);
        console.log(err.res.status);
        console.log(err.res.headers);
      } else if (err.req) {
        console.log(err.req)
      } else {
        console.log("Error: ", err.message);
      }
      console.log(err.config)
    }
    )  
    