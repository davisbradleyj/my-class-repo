var req = require("request");
var zipCode = process.argv[2];
if (!zip) {
    zip = 94108
}

var url = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+"us&APPID=0337ee5c21f2fbff84511550c3460591",
   