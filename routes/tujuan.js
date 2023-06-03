const express = require("express");
const router = express.Router();
const TujuanController = require("../controller/tujuan");
const Authentication = require("../middleware/authentication");

router.get("/", Authentication.requiredToken, TujuanController.getAllTujuan);
router.post(
  "/add",
  Authentication.requiredToken,
  TujuanController.createTujuan
);
router.delete(
  "/:id",
  Authentication.requiredToken,
  TujuanController.removeTujuan
);
module.exports = router;
