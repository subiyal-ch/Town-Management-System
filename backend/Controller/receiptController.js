const {
  createReceipt,
  getAllReceipts,
} = require("../database/model/receiptModel");
const responseHandler = require("../responseHandler");

// in working condition
const create = async (req, res) => {
  try {
    const receipt = await createReceipt(req.body);
    return responseHandler(res, receipt);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

// in working condition
const getAll = async (req, res) => {
  try {
    const receipt = await getAllReceipts();
    return responseHandler(res, { data: receipt });
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

module.exports = { create, getAll };
