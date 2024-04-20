const catchAsyncError = require("../middleware/catchAsyncError")
const User = require("../model/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");


// register user
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "sample_id",
            url: "sample url"
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

exports.logoutUser = catchAsyncError(async (req, res, next)=>{

    res.cookie("token",null, {
        httpOnly : true,
        expires : new Date(Date.now())
    })
    res.status(200).json({
        success : true,
        message : "Logged out Successfully"
    })
})