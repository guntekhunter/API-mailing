const models = require("../models/index");
class JobDetailService {
  async getAllJobDetail(req, res) {
    try {
      const jobDetail = await models.job_detail.findAll();
      return jobDetail;
    } catch (error) {
      console.log(error);
    }
  }
  async addJobDetail(req, res) {
    try {
      const { detail_name } = req.body;
      const jobDetail = await models.job_detail.create({
        detail_name,
      });
      return jobDetail;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteJobDetail(id, req) {
    try {
      const jobDetail = await models.job_detail.findOne({
        where: {
          id: id,
        },
      });
      if (!jobDetail) {
        console.log("job detail not found");
      }

      models.job_detail.destroy({
        where: {
          id: id,
        },
      });

      return jobDetail;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new JobDetailService();
