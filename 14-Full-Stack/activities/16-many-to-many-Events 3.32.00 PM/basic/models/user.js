module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    name: {
      type: DataTypes.STRING,
    }
  });

  // associating Users table to Events
  User.associate = models => {
    // Each User can have many Events
    models.User.hasMany(models.Event, {
      // this deletes all associated Events a User is deleted
      onDelete: "cascade"
    })
  }

  return User;
}