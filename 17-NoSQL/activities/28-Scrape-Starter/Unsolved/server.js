// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");

console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from Reuters Market news:" +
            "\n***********************************\n");

// Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.reuters.com/finance/markets/us").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("article").each(function(i, element) {

    var title = $(element).find("h3").text();
    var link = $(element).find("a").attr("href");
    var time = $(element).find("time").text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link,
      time: time
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
