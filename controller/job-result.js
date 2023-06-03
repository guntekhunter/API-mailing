const jobResultService = require("../services/job-result.service");

class JobResultController {
  async getAllJobResult(req, res) {
    try {
      const data = await jobResultService.getAllJobResult(req, res);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async createJobResult(req, res) {
    try {
      const data = await jobResultService.addJobResult(req);
      return res.status(200).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async removeJobResult(req, res) {
    try {
      const id = req.params.id;
      const data = await jobResultService.deleteJobResult(id, req);
      if (data !== null) {
        return res.status(200).json({
          success: "job Result deleted",
          data: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new JobResultController();
