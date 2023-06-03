const express = require("express");
const router = express.Router();
const UserController = require("../controller/users");
const Authentication = require("../middleware/authentication");

router.get("/", Authentication.requiredToken, UserController.getAllUsers);
router.post(
  "/register",
  Authentication.requiredToken,
  UserController.createUser
);
router.post("/login", UserController.login);
router.post("/logout", Authentication.removeToken, UserController.logOut);
router.delete("/:id", Authentication.requiredToken, UserController.removeUser);

module.exports = router;
