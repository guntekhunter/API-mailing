"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mailings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tujuan: {
        type: Sequelize.STRING,
      },
      no_surat: {
        type: Sequelize.STRING,
      },
      nama_pihak_satu: {
        type: Sequelize.STRING,
      },
      alamat_pihak_satu: {
        type: Sequelize.STRING,
      },
      jabatan_pihak_satu: {
        type: Sequelize.STRING,
      },
      nama_pihak_dua: {
        type: Sequelize.STRING,
      },
      tempat_lahir_pihak_dua: {
        type: Sequelize.STRING,
      },
      ktp_pihak_dua: {
        type: Sequelize.STRING,
      },
      tanggal_lahir_pihak_dua: {
        type: Sequelize.STRING,
      },
      alamat_pihak_dua: {
        type: Sequelize.STRING,
      },
      tugas_pihak_dua: {
        type: Sequelize.STRING,
      },
      job_detail: {
        type: DataTypes.ARRAY(Sequelize.STRING),
      },
      job_result: {
        type: DataTypes.ARRAY(Sequelize.STRING),
      },
      start_date: {
        type: Sequelize.STRING,
      },
      end_date: {
        type: Sequelize.STRING,
      },
      pembayaran: {
        type: Sequelize.STRING,
      },
      ttd_pihak_satu: {
        type: Sequelize.TEXT,
      },
      ttd_puhak_dua: {
        type: Sequelize.TEXT,
      },
      nama_bank: {
        type: Sequelize.STRING,
      },
      no_rekening: {
        type: Sequelize.STRING,
      },
      pembayaran_pertama: {
        type: Sequelize.STRING,
      },
      pembayaran_kedua: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mailings");
  },
};
