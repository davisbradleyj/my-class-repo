var fs = require("fs");
fs.appendFile('log.txt', ' tostitos fiesta \n queso dip', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });