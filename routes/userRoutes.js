const usersController = require("../controllers/userControllers")
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router();

const { getUsers, userStatus, deleteUser, registerUser, loginUser, getProfile } = usersController;

router.get("/users", getUsers);
router.get("/profile", authMiddleware, getProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/users/delete/:id", deleteUser);
router.put("/users/status/:id", userStatus);

module.exports = router;
