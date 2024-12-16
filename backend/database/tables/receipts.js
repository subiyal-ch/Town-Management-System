const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnections");
const { v4: uuid } = require("uuid");

class receipts extends Model {}

receipts.init(
  {
    receiptId: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: true,
    },
    cnic: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING(24),
      allowNull: false,
      unique: true,
    },
    plotNo: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    townName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING(),
      allowNull: false,
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

receipts.beforeCreate(async (receipt) => {
  receipt.receiptId = uuid();
});

module.exports = receipts;
