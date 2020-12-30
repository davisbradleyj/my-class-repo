// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "5hHNxmQcnPeJmRUWqxbqnX6ZadVQIi6W"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

// Take in the command line arguments
let city = process.argv[2];
let state = process.argv[3];

// Build your address as an array or string
let address = city + " " + state;

// Then use the geocoder object to search the address
geocoder.geocode(address, function (error, data) {
  console.log(JSON.stringify(data, null, 2))
})