var connection = require("./connection.js");

// * Console log all the party names. - works!
// * Console log all the client names. - works!
// * Console log all the parties that have a party-type of grown-up. - works!
var orm = {
    selectAll: function(selectCol, colToSearch) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [selectCol, colToSearch], function(err,result){
            if (err) throw err;
            console.table(result)
        })

    },
    selectWhere: function(selectCol, table, colToSearch, valOfCol){
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [selectCol,table,colToSearch,valOfCol], function(err,result){
            if (err) throw err;
            console.table(result)
        })
    },
    // * Console log all the clients and their parties.
    indWhoHas: function(client, party, tableInputOne, tableInputTwo, id, client_id)){
        var queryString = "SELECT ??, ??.?? FROM ?? LEFT JOIN ?? ON ??.?? = ??.??"
    }
}
module.exports = orm;




