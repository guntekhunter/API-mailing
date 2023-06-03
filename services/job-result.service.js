const models = require("../models/index");
class JobResultService {
  async getAllJobResult(req, res) {
    try {
      const jobResult = await models.job_result.findAll();
      return jobResult;
    } catch (error) {
      console.log(error);
    }
  }
  async addJobResult(req, res) {
    try {
      const { result_name } = req.body;
      const jobResult = await models.job_result.create({
        result_name,
      });
      return jobResult;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteJobResult(id, req) {
    try {
      const jobResult = await models.job_result.findOne({
        where: {
          id: id,
        },
      });
      if (!jobResult) {
        console.log("job result not found");
      }

      models.job_result.destroy({
        where: {
          id: id,
        },
      });

      return jobResult;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new JobResultService();
