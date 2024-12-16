const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnections");
const { v4: uuid } = require("uuid");

class plots extends Model {}

plots.init(
  {
    plotId: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    cnic: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    plotNumber: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    pricePerMarla: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fixedInstallment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    totalInstallments: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    monthlyInstallment: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(64),
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
