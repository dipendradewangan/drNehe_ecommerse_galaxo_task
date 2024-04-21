const express = require("express");
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword } = require("../controller/userController");
const router = express.Router()


// register user
router.route("/register").post(registerUser)

// login user
router.route("/login").post(loginUser)

// forgot password
router.route("/password/forgot").post(forgotPassword)

// reset password
router.route("/password/reset/:token").put(resetPassword)

// logout User
router.route("/logout").get(logoutUser)

module.exports = router;