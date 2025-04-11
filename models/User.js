const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    reg_time: String,
    login_time: String,
    activityStatus: String,
  },
  {
    collection: "User",
  }
);

module.exports = mongoose.model("User", UserSchema);
