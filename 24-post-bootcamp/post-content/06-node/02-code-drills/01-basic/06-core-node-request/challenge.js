const request = require("request")
var zip = process.argv[2]
if (!zip) {
    zip = 94108
}

let queryUrl = "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip="+zip+",us&APPID=0337ee5c21f2fbff84511550c3460591";

request(queryUrl, function(err,res,body) {
    if (!err && res.statusCode === 200) {
        let forecast = JSON.parse(body).list

        for (let i=0;i<forecast.length;i++){
            console.log(forecast[i].dt_txt, forecast[i].main.temp + " F")
        }
    } else {
        console.log(err)
    }
})
