const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to Database");
});

module.exports = db;
