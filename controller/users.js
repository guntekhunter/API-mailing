const userService = require("../services/user.service");

const jwt = require("jsonwebtoken");

class UserController {
  getRoot(req, res) {
    res.status(200).json({
      status: "ok",
      message: "API running",
    });
  }
  async getAllUsers(req, res) {
    const data = await userService.getAllUsers(req);
    return res.status(200).json({
      success: true,
      data: data,
    });
  }

  async createUser(req, res) {
    try {
      const data = await userService.addUser(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async login(req, res) {
    try {
      const data = await userService.loginUser(req);

      if (data === null) {
        return res.status(500).json({
          error: "Wrong email or password",
        });
      } else {
        // create token
        const userEmail = req.body.email;
        const user = { email: userEmail };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "20m",
        });

        return res.status(200).json({
          accessToken: accessToken,
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async logOut(req, res) {
    const tokenBlacklist = [];
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (token) {
        tokenBlacklist.push(token);
      }
      return res.status(200).json({
        satatus: "logout",
        removed: token,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeUser(req, res) {
    try {
      const id = req.params.id;
      const data = await userService.deleteUser(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: "user deleted",
          data: data,
        });
      } else {
        return res.status(500).json({
          data: "user with that id dosn't exist",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
