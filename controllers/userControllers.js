const bcrypt = require("bcryptjs");
const User = require("../models/User");

// register user
const registerUser = async (req, res) => {
  const { name, email, reg_time, login_time, activityStatus } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.send({ success: false, message: "User already exists" });
    }

    await User.create({
      name,
      email,
      password,
      reg_time,
      login_time,
      activityStatus,
    });
    res.send({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.send({ success: false, message: "Server error" });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password, login_time } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.send({ success: false, message: "User not found" })
    }

    if (bcrypt.compare(password, oldUser.password)) {
      if (res.status(201)) {
        return res.send({ success: true, message: "User logged in succesfully" })
      } else {
        return res.send({ success: false, message: "User does not exists" })
      }
    }
    res.send({ success: "error", message: "Invalid Password" })

  } catch (error) {
    res.send({ success: false, message: "Server error" })
  }
};

// get users from database
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
};

// delete user
const deleteUser = async (req, res) => {
  //   const { id } = req.params;
  //   const sqlRemove = "DELETE FROM users_table WHERE id = ?";
  //   db.query(sqlRemove, [id], (error, result) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //   });
};

// set user status
const userStatus = async (req, res) => {
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

module.exports = {
  deleteUser,
  getUsers,
  registerUser,
  loginUser,
  userStatus,
};
