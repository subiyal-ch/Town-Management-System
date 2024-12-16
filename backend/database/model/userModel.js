const { models } = require("../index");

module.exports = {
  createUser: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  getAllUsers: async (query) => {
    try {
      const data = await models.users.findAndCountAll({
        attributes: {
          exclude: ["password", "deletedAt"],
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

  getUser: async ({ username, userId }) => {
    try {
      const data = await models.users.findOne({
        where: {
          ...(username == "false"
            ? { userId: userId }
            : { username: username }),
        },
        attributes: {
          exclude: ["password", "deletedAt"],
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

  updateUser: async ({ userId, ...body }) => {
    try {
      const data = await models.users.destroy({ where: { userId: userId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  removeUser: async ({ userId }) => {
    try {
      const data = await models.users.destroy({ where: { userId: userId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
