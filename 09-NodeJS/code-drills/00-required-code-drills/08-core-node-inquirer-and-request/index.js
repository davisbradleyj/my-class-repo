var request = require("request");
var inquirer = require("inquirer")
var url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=0337ee5c21f2fbff84511550c3460591&q=";
inquirer.prompt([
    {
        type: "input",
        message: "Please enter the city name: ",
        name: "city"
    }
]).then(function (userChoice) {
    request(url+userChoice.city, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var weather = JSON.parse(body)
            console.log(weather.name, weather.sys.country);
            console.log(weather.weather[0].description)
        } else {
            console.log(error)
        }
    })
})

