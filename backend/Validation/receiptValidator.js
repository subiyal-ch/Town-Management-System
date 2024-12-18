const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  buyerName: joi.string().min(3).max(64).required(),
  fatherName: joi.string().min(3).max(64).required(),
  cnicNumber: joi.string().min(3).max(15).required(),
  shopHouseNumber: joi.string().min(1).max(20).required(),
  areaMeasurement: joi.string().min(1).max(64).required(),
  amount: joi.string().min(4).max(32).required(24),
});

const getAllValidation = joi.object({}).optional();

// Middleware functions
const createReceipt = async (req, res, next) => {
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const getAllReceipt = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

module.exports = { createReceipt, getAllReceipt };
