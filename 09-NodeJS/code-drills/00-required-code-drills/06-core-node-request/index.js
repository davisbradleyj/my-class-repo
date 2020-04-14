var request = require("request");

var zipCode = process.argv[2];
if (!zipCode) {
    zipCode = 94108;
}

var url = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zipCode+",us&APPID=0337ee5c21f2fbff84511550c3460591";

request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        var forecast = JSON.parse(body).list;
        console.log(forecast)
        for (var i=0; i<forecast.length; i++) {
            console.log(forecast[i].dt_txt, forecast[i].main.temp)
    }
    } else {
        console.log(error)
    }
})