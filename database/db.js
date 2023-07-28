const mongoose = require("mongoose");

const { DB_DATABASE } = process.env;
const database = DB_DATABASE;

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(error => {
    console.log(error);
  });
