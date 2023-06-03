const express = require("express");
const router = express.Router();
const JobDetailController = require("../controller/job-detail");
const Authentication = require("../middleware/authentication");

router.get(
  "/",
  Authentication.requiredToken,
  JobDetailController.getAllJobDetail
);
router.post(
  "/add",
  Authentication.requiredToken,
  JobDetailController.createJobDetail
);
router.post(
  "/:id",
  Authentication.requiredToken,
  JobDetailController.removeJobDetail
);
module.exports = router;
