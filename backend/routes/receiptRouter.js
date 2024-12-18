var express = require("express");
var router = express.Router();
const { create, getAll } = require("../Controller/receiptController");

// middlewares
const {
  createReceipt,
  getAllReceipt,
} = require("../Validation/receiptValidator");
/* GET users listing. */

router.post("/create", createReceipt, create);
router.get("/get-all", getAllReceipt, getAll);

module.exports = router;
