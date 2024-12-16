const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnections");

class towns extends Model {}

towns.init(
  {
    townId: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    townName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    totalPlots: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: false,
    },
  },
  {
    // it is bydefault true so we not mentioned it seperatly for created at and updated at
    // timestamps:true
    // for creating additional table deleted at
    paranoid: true,
    sequelize,
  }
);
module.exports = towns;
