// fs is a Node standard library package for reading and writing files
// When we installed Node.js, we also installed its standard library. 
// The standard library includes dozens of modules that extend the basic functionality of Node.

// 🔑 In order to use a modules, we need to import it into our application using require:
// We import the fs, or file system module using require and store it in a variable, fs.
// The convention is to name variables after the module.

// ☝️ Why do you think we need to import modules if they are built-in to Node to begin with?

// 🙋 We import modules into our application so that we are only loading exactly what we need. 
// This will speed up the performance of our applications.
var fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// 🙋 This application will read a file, data.csv, and will log the results stored in a variable, data.

// 🔑 The fs method readFile accepts three arguments: 
//1. the file we want to read
// 2. the encoding format we want to use to read the file, 
// and, 3. a callback.
fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});
