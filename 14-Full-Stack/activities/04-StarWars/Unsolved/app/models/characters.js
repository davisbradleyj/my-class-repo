var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var Character = sequelize.define("character", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER,
    created_at: Sequelize.DATE
  });
  
  // Syncs with DB
  Characters.sync();
  
  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Characters;
  