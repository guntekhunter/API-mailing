const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  posrt: 5432,
  password: "060820",
  database: "mailing",
});

client.connect();

client.query("select * from users", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
