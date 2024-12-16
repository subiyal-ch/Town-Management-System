var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
  get,
} = require("../Controller/userController");

// middlewares
const {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  removeUser,
} = require("../validations/userValidator");
/* GET users listing. */
router.post("/create", createUser, create);
router.get("/get-all", getAllUser, getAll);
router.get("/get", getUser, get);
router.put("/update", updateUser, update);
router.delete("/delete", removeUser, remove);

module.exports = router;
