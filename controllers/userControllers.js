const db = require("../database/db");
const bcrypt = require("bcryptjs");

// get users from database
const getUsers = (req, res) => {
  const sqlGet = "SELECT * FROM users_table";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
};

// register user
const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);

  const sqlSelect = "SELECT * FROM users_table WHERE email = ?";
  db.query(sqlSelect, [email], (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    if (result.length > 0) {
      res.send({ success: false, status: "User already exists" });
    } else {
      const sqlInsert = "INSERT INTO users_table (name, email, password) VALUES (?, ?, ?);";
      const values = [name, email, password];
      db.query(sqlInsert, values, error => {
        if (error) {
          console.log(error);
        }
      });
      res.send({ success: true, status: "User registered successfully" });
    }
  });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const sqlSelect = "SELECT * FROM users_table WHERE email = ?";
  db.query(sqlSelect, [email], async (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    if (await bcrypt.compare(password, result[0].password)) {
      res.send({ success: true, data: result[0] });
    } else {
      res.send({ success: false, status: "Invalid Password" });
    }
  });
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
};
