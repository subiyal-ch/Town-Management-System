const { models } = require("../index");

module.exports = {
  // in working condition
  createReceipt: async (body) => {
    try {
      const data = await models.receipts.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
  // in working condition
  getAllReceipts: async (query) => {
    try {
      const data = await models.receipts.findAndCountAll({
        attributes: {
          exclude: ["updatedAt", "deletedAt"],
        },
        paranoid: false,
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
