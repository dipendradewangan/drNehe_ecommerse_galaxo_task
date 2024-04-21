const express = require("express");
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser } = require("../controller/userController");
const { isAuthenticateUser, authorisedRoles } = require("../middleware/auth");
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

// get user details
router.route("/me").get(isAuthenticateUser, authorisedRoles("admin"), getUserDetails)

// update user password
router.route("/password/update").put(isAuthenticateUser, updatePassword)

// updateProdfile 
router.route("/me/update").put(isAuthenticateUser, updateProfile)

// get all users -- admin
router.route("/admin/allUsers").get(isAuthenticateUser,  getAllUsers);


// get single users details -- admin
router.route("/admin/user/:id").get(isAuthenticateUser, authorisedRoles("admin"), getSingleUser);

// update user role -- admin
router.route("/admin/user/:id").put(isAuthenticateUser, updateUserRole)

// delete user -- admin
router.route("/admin/user/:id").delete(isAuthenticateUser, authorisedRoles("admin"), deleteUser)

module.exports = router;