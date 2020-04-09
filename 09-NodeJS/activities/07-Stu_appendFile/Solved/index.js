var fs = require("fs");

// we add a newline character to the command line argument
// We concatenate a new line character, \n, to the value stored in process.argv[2].
// See Node.js documentation for the File System module: https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback
fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

  if (err) {
    console.log(err);
  }
  else {
    console.log("Commit logged!");
  }

});
