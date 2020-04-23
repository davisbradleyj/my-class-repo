var orm = require("./config/orm.js");

orm.selectAll("party_name","parties");
orm.selectAll("client_name","clients");
orm.selectWhere("party_name","parties","party_type","grown-up");
orm.