const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1);
  }
}

module.exports = db;
