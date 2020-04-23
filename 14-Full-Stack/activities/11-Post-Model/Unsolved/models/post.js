module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1] 
      }
    },
    body: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false, 
        len: [1] 
      }
    },
    catagory: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        len: [1]  
      }
    }
  });
  return Post;
};
