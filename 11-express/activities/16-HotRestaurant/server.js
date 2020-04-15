// =======dependencies
let express = require("express");
let path = require("path");
// ========set up the server
let app = express();
let PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// =========mock data base
var resesrved_tables = []
var wait_list = []
// ==========routes
// home
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
// go to all tables and wait list
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    // res.send(tables);
});
//  get all tables reserved
app.get("/reservationlist", function (req, res) {
    return res.json(resesrved_tables);
})
//  get all waiting list
app.get("/waitlist", function (req, res) {
    return res.json(wait_list)
})
app.get("/reservations", function (req, res){
    res.sendFile(path.join(__dirname, "reservations.html"))
})
// make reservations
app.post("/reservations/new", function (req, res) {
    let newReservation = req.body
    if(resesrved_tables.length < 5){
        resesrved_tables.push(newReservation);
        // create object
    }else{
        wait_list.push(newReservation);
    }
    res.sendFile(path.join(__dirname, "tables.html"));
});
//
app.listen(PORT, function(){
    console.log("getting started")
})