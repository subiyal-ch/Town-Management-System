const sequelize = require("./dbConnections");

const users = require("./tables/users");
const plots = require("./tables/plots");
const receipts = require("./tables/receipts");

const models = { users, plots, receipts };

sequelize.models = models;
module.exports = { sequelize, models };
