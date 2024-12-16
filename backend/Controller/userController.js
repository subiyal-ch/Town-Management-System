const { models } = require("../database");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  removeUser,
} = require("../database/models/userModel");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return responseHandler(res, { data: user });
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const getAll = async (req, res) => {
  try {
    const user = await getAllUsers();
    return responseHandler(res, { data: user });
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const get = async (req, res) => {
  try {
    const user = await getUser(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const update = async (req, res) => {
  try {
    const user = await updateUser(req.body);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const remove = async (req, res) => {
  try {
    const user = await removeUser(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

module.exports = { create, getAll, get, update, remove };
