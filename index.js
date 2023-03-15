const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const port = 5001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users_db",
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());

// register user
app.post("/api/register", async (req, res) => {
  const { name, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  const sqlInsert = "INSERT INTO users_table (name, email, password) VALUES (?, ?, ?);";
  db.query(sqlInsert, [name, email, password], error => {
    if (error) {
      console.log(error);
    }
  });
});

// getting data from database
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM users_table";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.listen(port);
