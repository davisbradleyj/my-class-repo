var http = require("http");
var PORTONE = 7000;
var PORTTWO = 7500;

function handleReq1(requestOne, responseOne) {
    responseOne.end("Quote 1");
}

function handleReq2(requestTwo, responseTwo) {
    responseTwo.end("Quote 2");
}

var server1 = http.createServer(handleReq1);
var server2 = http.createServer(handleReq2);

server1.listen(PORTONE, function() {
    console.log("Welcome to Fantasy Island at " + PORTONE);
});

server2.listen(PORTTWO, function() {
    console.log("We'll see you next time at " + PORTTWO);
});


