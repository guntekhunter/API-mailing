const models = require("../models/index");
class MailingService {
  async getAllMailing(req, res) {
    try {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const mailing = await models.mailing.findAll();

      const result = {};
      const totalLength = mailing.length;
      const totalPages = Math.ceil(totalLength / limit);
      result.length = totalPages;

      if (endIndex < mailing.length) {
        result.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      result.result = mailing.slice(startIndex, endIndex);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async addMailing(req, res) {
    try {
      const {
        tujuan,
        no_surat,
        nama_pihak_satu,
        alamat_pihak_satu,
        jabatan_pihak_satu,
        nama_pihak_dua,
        tempat_lahir_pihak_dua,
        ktp_pihak_dua,
        tanggal_lahir_pihak_dua,
        alamat_pihak_dua,
        tugas_pihak_dua,
        job_detail,
        job_result,
        start_date,
        end_date,
        pembayaran,
        ttd_pihak_satu,
        ttd_puhak_dua,
        nama_bank,
        no_rekening,
        pembayaran_pertama,
        pembayaran_kedua,
      } = req.body;

      const mailing = await models.mailing.create({
        tujuan,
        no_surat,
        nama_pihak_satu,
        alamat_pihak_satu,
        jabatan_pihak_satu,
        nama_pihak_dua,
        tempat_lahir_pihak_dua,
        ktp_pihak_dua,
        tanggal_lahir_pihak_dua,
        alamat_pihak_dua,
        tugas_pihak_dua,
        job_detail: Array.isArray(job_detail)
          ? job_detail
          : job_detail
          ? [job_detail]
          : [],
        job_result: Array.isArray(job_result)
          ? job_result
          : job_result
          ? [job_result]
          : [],
        start_date,
        end_date,
        pembayaran,
        ttd_pihak_satu,
        ttd_puhak_dua,
        nama_bank,
        no_rekening,
        pembayaran_pertama,
        pembayaran_kedua,
      });

      return mailing;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteMailing(id, req) {
    try {
      const isExist = await models.mailing.findOne({
        where: {
          id: id,
        },
      });
      if (!isExist) {
        console.log("not found");
      }

      models.mailing.destroy({
        where: {
          id: id,
        },
      });
      return isExist;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id, req) {
    try {
      const mailing = await models.mailing.findOne({
        where: {
          id: id,
        },
      });
      if (!mailing) {
        console.log("not found");
      }
      return mailing;
    } catch (error) {
      console.log(error);
    }
  }
  async editMailings(id, req) {
    try {
      const {
        tujuan,
        no_surat,
        nama_pihak_satu,
        alamat_pihak_satu,
        jabatan_pihak_satu,
        nama_pihak_dua,
        tempat_lahir_pihak_dua,
        ktp_pihak_dua,
        tanggal_lahir_pihak_dua,
        alamat_pihak_dua,
        tugas_pihak_dua,
        job_detail,
        job_result,
        start_date,
        end_date,
        pembayaran,
        ttd_pihak_satu,
        ttd_puhak_dua,
        nama_bank,
        no_rekening,
        pembayaran_pertama,
        pembayaran_kedua,
      } = req.body;
      const mailing = await models.mailing.findOne({
        where: {
          id: id,
        },
      });
      if (!mailing) {
        console.log("not found");
      }
      mailing.tujuan = tujuan;
      mailing.no_surat = no_surat;
      mailing.nama_pihak_satu = nama_pihak_satu;
      mailing.alamat_pihak_satu = alamat_pihak_satu;
      mailing.jabatan_pihak_satu = jabatan_pihak_satu;
      mailing.nama_pihak_dua = nama_pihak_dua;
      mailing.tempat_lahir_pihak_dua = tempat_lahir_pihak_dua;
      mailing.ktp_pihak_dua = ktp_pihak_dua;
      mailing.tanggal_lahir_pihak_dua = tanggal_lahir_pihak_dua;
      mailing.alamat_pihak_dua = alamat_pihak_dua;
      mailing.tugas_pihak_dua = tugas_pihak_dua;
      mailing.job_detail = Array.isArray(job_detail)
        ? job_detail
        : [job_detail];
      mailing.job_result = Array.isArray(job_result)
        ? job_result
        : [job_result];
      mailing.start_date = start_date;
      mailing.end_date = end_date;
      mailing.pembayaran = pembayaran;
      mailing.ttd_pihak_satu = ttd_pihak_satu;
      mailing.ttd_puhak_dua = ttd_puhak_dua;
      mailing.nama_bank = nama_bank;
      mailing.no_rekening = no_rekening;
      mailing.pembayaran_pertama = pembayaran_pertama;
      mailing.pembayaran_kedua = pembayaran_kedua;

      await mailing.save();
      return mailing;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new MailingService();
