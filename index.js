require("dotenv").config();

const usersRoutes = require("./routes/userRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const app = express();

db()

app.use(express.json());
app.use(cors());
app.use("/api", usersRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
