const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controller/userController");
const { protect } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
