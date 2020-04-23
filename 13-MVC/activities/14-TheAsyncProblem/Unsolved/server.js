var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", function(farley){
    console.log(farley);
});

console.log(data); // Data is undefined. Why?
