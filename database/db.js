const mysql = require("mysql");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected");
});

module.exports = db;
