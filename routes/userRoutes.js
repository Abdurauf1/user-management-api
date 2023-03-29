const usersController = require("../controllers/userControllers");
const express = require("express");

const router = express.Router();
const { getUsers, registerUser, loginUser } = usersController;

router.get("/get", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
