const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  name: joi.string().min(3).max(34).required(),
  username: joi.string().min(4).max(34).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(34).required(),
});

const getValidation = joi
  .object({
    userId: joi.string().min(3).max(34).optional(),
    username: joi.string().min(4).max(34).optional(),
  })
  .unknown(true);

const getAllValidation = joi.object({}).optional();

const updateValidation = joi
  .object({
    userId: joi.string().min(3).max(34).optional(),
    name: joi.string().min(3).max(34).optional(),
    username: joi.string().min(4).max(34).optional(),
    email: joi.string().email().optional(),
  })
  .unknown(true);

const removeValidation = joi.object({
  userId: joi.string().min(3).max(34).required(),
});

// Middleware functions
const createUser = async (req, res, next) => {
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const getUser = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const updateUser = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const removeUser = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

module.exports = { createUser, getUser, getAllUser, updateUser, removeUser };
