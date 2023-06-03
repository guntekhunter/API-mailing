const mailingService = require("../services/mailing.service");
const userService = require("../services/user.service");
class MailingController {
  async getAllMailing(req, res) {
    try {
      const data = await mailingService.getAllMailing(req, res);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async createMailing(req, res) {
    try {
      const data = await mailingService.addMailing(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeMailing(req, res) {
    try {
      const id = req.params.id;
      const data = await mailingService.deleteMailing(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: "mailing deleted",
          data: data,
        });
      } else {
        return res.status(500).json({
          data: "mail dosn't exist",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getMailig(req, res) {
    try {
      const id = req.params.id;
      const data = await mailingService.getOne(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: true,
          data: data,
        });
      } else {
        return res.status(500).json({
          data: "mail dosn't exist",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async putMailing(req, res) {
    try {
      const id = req.params.id;
      const data = await mailingService.editMailings(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: "mail just updated",
          data: data,
        });
      } else {
        return res.status(500).json({
          data: "mailing with that id dosn't exist",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MailingController();
