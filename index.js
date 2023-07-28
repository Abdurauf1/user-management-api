require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const usersRoutes = require("./routes/userRoutes");

const { PORT } = process.env;
const port = PORT | 5001;

app.use(express.json());
app.use(cors());

app.use("/api", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
