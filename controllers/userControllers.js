const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken")

// ping
const pingRoute = (req, res) => {
  res.status(200).send("OK")
}

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
  try {
    const { email, password, login_time } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.send({ success: false, message: "User not found" })
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      return res.send({ success: false, message: "Invalid Password" })
    }

    user.login_time = login_time;
    user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    if (res.status(200)) {
      return res.send({ success: true, data: token, message: "User logged in succesfully" })
    }
  } catch (error) {
    res.send({ success: false, message: "Server error" })
  }
};

// get users from database
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findOneAndDelete(id)
    res.send({ success: true, message: "User deleted succesfully" })
  } catch (error) {
    console.log(error);
  }
};

// set user status
const userStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = await User.findOneAndUpdate(id)
    user.activityStatus = status
    user.save()
    res.send({ success: true })
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  pingRoute,
  deleteUser,
  getUsers,
  registerUser,
  loginUser,
  userStatus,
};
