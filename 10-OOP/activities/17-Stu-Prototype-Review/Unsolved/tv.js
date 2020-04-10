const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function() {};

// Find a tv show actor
TV.prototype.findActor = function(actor) {
  const URL = "http://api.tvmaze.com/singlesearch/people?q=" + actor;
  axios.get(URL).then(function(response) {
    console.log("whatever", response)
    const actorData = [
      "Name: " + response.data[0].person.name,
      "Birthday: " + response.data[0].person.birthday,
      "Gender: " + response.data[0].person.gender,
      "Country of Origin: " + response.data[0].person.country.name,
      "TV Maze URL: " + response.data[0].person.url,
    ]
  })



}

// Find a tv show
TV.prototype.findShow = function(show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(function(response) {
    // console.log(response);
    const showData = [
      "Show: " + response.data.name,
      "Genre(s): " + response.data.genres.join(", "),
      "Rating: " + response.data.rating.average,
      "Network: " + response.data.network.name,
      "Summary: " + response.data.summary,
      "-".repeat(60)
    ].join("\n\n");

    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
};

module.exports = TV;
