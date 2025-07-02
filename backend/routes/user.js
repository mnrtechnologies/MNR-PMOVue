// Import the required modules
const express = require("express")
const { signin, sendotp, register, getUserDetails, getAllUsers, deleteUser, editUser } = require("../controllers/AuthController")
const { resetPasswordToken, resetPassword } = require("../controllers/resetPasswordController")
const router = express.Router()
const {auth, isAdmin} = require("../middleware/auth")

// Routes for Login, Signup, and Authentication


//get user details
router.get("/get-user-details",auth,getUserDetails);

//get all user details
router.get("/get-all-user-details",auth,isAdmin,getAllUsers)

// Edit User Details
router.put("/edit-user/:userId", auth, isAdmin, editUser);

// Delete User
router.delete("/delete-user/:userId", auth, isAdmin, deleteUser);

// Route for user login
router.post("/signin", signin)

// Route for user signup
router.post("/register",auth,isAdmin, register)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// // Route for Changing the password

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)


module.exports = router
