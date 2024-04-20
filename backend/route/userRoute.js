const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controller/userController");
const router = express.Router()


// register user
router.route("/register").post(registerUser)

// login user
router.route("/login").post(loginUser)


// logout User
router.route("/logout").get(logoutUser)

module.exports = router;