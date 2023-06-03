const jobDetailService = require("../services/job-detail.service");

class JobDetailController {
  async getAllJobDetail(req, res) {
    try {
      const data = await jobDetailService.getAllJobDetail(req, res);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async createJobDetail(req, res) {
    try {
      const data = await jobDetailService.addJobDetail(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeJobDetail(req, res) {
    try {
      const id = req.params.id;
      const data = await jobDetailService.deleteJobDetail(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: "job detail deleted",
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new JobDetailController();
