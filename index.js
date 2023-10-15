require("dotenv").config();
const usersRoutes = require("./routes/userRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", usersRoutes);

app.listen(PORT);
