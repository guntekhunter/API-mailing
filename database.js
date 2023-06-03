const { createPool } = require("mysql");

const pool = createPool({
  user: "postgres",
  host: "localhost",
  database: "mailing",
  password: "060820",
  connectionLimit: 10,
});

pool.query(`SELECT NOW()`, (err, res) => {
    console.log(err, res);
    pool.end();
});
