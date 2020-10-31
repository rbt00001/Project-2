// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Score = sequelize.define("Score", {
    // The email cannot be null, and must be a proper email before creation
    score: {
      type: DataTypes.INTEGER
    }
  });

  Score.associate = function(models) {
    Score.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Score;
};
