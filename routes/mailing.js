const express = require("express");
const router = express.Router();
const MailingController = require("../controller/mailing");
const Authentication = require("../middleware/authentication");

router.get("/", Authentication.requiredToken, MailingController.getAllMailing);
router.post(
  "/add",
  Authentication.requiredToken,
  MailingController.createMailing
);
router.delete(
  "/:id",
  Authentication.requiredToken,
  MailingController.removeMailing
);
router.get("/:id", Authentication.requiredToken, MailingController.getMailig);
router.put("/:id", Authentication.requiredToken, MailingController.putMailing);

module.exports = router;
