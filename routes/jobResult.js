const express = require("express");
const router = express.Router();
const JobResultController = require("../controller/job-result");
const Authentication = require("../middleware/authentication");

router.get(
  "/",
  Authentication.requiredToken,
  JobResultController.getAllJobResult
);
router.post(
  "/add",
  Authentication.requiredToken,
  JobResultController.createJobResult
);
router.post(
  "/:id",
  Authentication.requiredToken,
  JobResultController.removeJobResult
);
module.exports = router;
