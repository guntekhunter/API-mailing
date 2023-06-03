"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mailing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mailing.init(
    {
      tujuan: DataTypes.STRING,
      no_surat: DataTypes.STRING,
      nama_pihak_satu: DataTypes.STRING,
      alamat_pihak_satu: DataTypes.STRING,
      jabatan_pihak_satu: DataTypes.STRING,
      nama_pihak_dua: DataTypes.STRING,
      tempat_lahir_pihak_dua: DataTypes.STRING,
      ktp_pihak_dua: DataTypes.STRING,
      tanggal_lahir_pihak_dua: DataTypes.STRING,
      alamat_pihak_dua: DataTypes.STRING,
      tugas_pihak_dua: DataTypes.STRING,
      job_detail: DataTypes.ARRAY(DataTypes.STRING),
      job_result: DataTypes.ARRAY(DataTypes.STRING),
      start_date: DataTypes.STRING,
      end_date: DataTypes.STRING,
      pembayaran: DataTypes.STRING,
      ttd_pihak_satu: DataTypes.TEXT,
      ttd_puhak_dua: DataTypes.TEXT,
      nama_bank: DataTypes.STRING,
      no_rekening: DataTypes.STRING,
      pembayaran_pertama: DataTypes.STRING,
      pembayaran_kedua: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "mailing",
    }
  );
  return mailing;
};
