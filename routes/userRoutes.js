const usersController = require("../controllers/userControllers")
const express = require("express");

const router = express.Router();

const { getUsers, userStatus, deleteUser, registerUser, loginUser, pingRoute } = usersController;

router.get("/ping", pingRoute)
router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/users/delete/:id", deleteUser);
router.put("/users/status/:id", userStatus);

module.exports = router;
