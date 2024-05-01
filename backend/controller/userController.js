const catchAsyncError = require("../middleware/catchAsyncError")
const User = require("../model/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")


// register user
exports.registerUser = catchAsyncError(async (req, res, next) => {


    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:"sample_id",
            url: "sample_url"
        }
    })

    sendToken(user, 201, res)
})


// login user

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter email and password", 400))
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return next(new ErrorHandler("User Not Exists", 401))
    }

    const comparePassword = await user.comparePassword(password)



    if (!comparePassword) {
        return next(new ErrorHandler("Wrong email or password", 401))
    }


    sendToken(user, 200, res)

})


// logout user

exports.logoutUser = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now())
    })
    res.status(200).json({ 
        success: true,
        message: "Logged out Successfully"
    })
})


// forgot password 

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })


    if (!user) {
        return next(new ErrorHandler("User not exists", 404))
    }

    // get reset password token

    const resetToken = user.getResetPasswordToken()


    await user.save({ validateBeforeSave: false })

    const resetPasswordUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`



    const message = `Your password reset token is \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then please ignore it`

    try {

        await sendEmail({
            email: user.email,
            subject: `Dr. Neha Ecommerse Password Recovery`,
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: true })

        return next(new ErrorHandler(error.message, 500))
    }

})


exports.resetPassword = catchAsyncError(async (req, res, next) => {
    const resetToken = req.params.token;

    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gte: Date.now()
        }
    })

    if (!user) {
        return next(new ErrorHandler("Reset passsword token not matched or has been expired!", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password and Confirm password not matched", 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res)

})


// get user details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})


// update password
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password")
    console.log(user)

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is incorrect", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password and Confirm password are not matched!", 400))
    }

    user.password = req.body.password;

    await user.save()
    sendToken(user, 200, res)
})


// update profile
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    console.log(req.body)
    const newUserData = {
        email: req.body.email,
        name: req.body.name,
        phone : req.body.phone,
    }

    // we will use coudinary later
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({
        success: true,
        message: "User profile successfully updated!"

    })
})


// get all users - admin
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find();

    const allUsersCount = await User.countDocuments();

    res.status(200).json({
        success: true,
        allUsersCount,
        users
    })
})

// get single user - admin
exports.getSingleUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler("User not exist!", 404))
    }

    res.status(200).json({
        success : true,
        user
    })
})


// update user role -- admin 
exports.updateUserRole = catchAsyncError(async (req, res, next)=>{
    const newUserData = {
        role : req.body.role,
    }

    
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({
        success: true,
        message: "User profile successfully updated!"

    })
})

// delete user -- admin
exports.deleteUser = catchAsyncError(async (req, res, next)=>{
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler("User not found!", 404))
    }

    await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
        succss : true,
        message : "User successfully deleted!"
    })
})