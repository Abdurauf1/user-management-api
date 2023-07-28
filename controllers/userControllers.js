const bcrypt = require("bcryptjs");

// get users from database
const getUsers = (req, res) => {};

// set user status
const userStatus = (req, res) => {
  //   const { id } = req.params;
  //   const { status } = req.body;
  //   const sqlUpdate = "UPDATE users_table SET status = ? WHERE id = ?";
  //   db.query(sqlUpdate, [status, id], (error, result) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     res.send(status);
  //   });
};

// delete user
const deleteUser = (req, res) => {
  //   const { id } = req.params;
  //   const sqlRemove = "DELETE FROM users_table WHERE id = ?";
  //   db.query(sqlRemove, [id], (error, result) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
};

// register user
const registerUser = async (req, res) => {
  // const { name, email, reg_time, login_time, status } = req.body;
  // const password = await bcrypt.hash(req.body.password, 10);
  // const sqlSelect = "SELECT * FROM users_table WHERE email = ?";
  // db.query(sqlSelect, [email], (error, result) => {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   if (result.length > 0) {
  //     res.send({ success: false, message: "User already exists" });
  //   } else {
  //     const sqlInsert =
  //       "INSERT INTO users_table (name, email, password, reg_time, login_time, status) VALUES (?, ?, ?, ?, ?, ?);";
  //     const values = [name, email, password, reg_time, login_time, status];
  //     db.query(sqlInsert, values, error => {
  //       if (error) {
  //         console.log(error);
  //       }
  //     });
  //     res.send({ success: true, message: "User registered successfully" });
  //   }
  // });
};

// login user
const loginUser = async (req, res) => {
  // const { email, password, login_time } = req.body;
  // const sqlSelect = "SELECT * FROM users_table WHERE email = ?";
  // const sqlUpdate = "UPDATE users_table SET login_time = ? WHERE email = ?";
  // db.query(sqlSelect, [email], async (error, result) => {
  //   if (error) {
  //     console.log(error);
  //     return;
  //   }
  //   if (result.length > 0) {
  //     if (await bcrypt.compare(password, result[0].password)) {
  //       db.query(sqlUpdate, [login_time, email], (error, result) => {
  //         if (error) {
  //           console.log(error);
  //         }
  //       });
  //       res.send({ success: true });
  //     } else {
  //       res.send({ success: false, message: "Invalid Password" });
  //     }
  //   } else {
  //     res.send({ success: false, message: "User does not exists" });
  //   }
  // });
};

module.exports = {
  deleteUser,
  getUsers,
  registerUser,
  loginUser,
  userStatus,
};
