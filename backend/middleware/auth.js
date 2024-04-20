const jwt = require("jsonwebtoken")

const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require("../model/userModel");


// check authentication using token in cookie

exports.isAuthenticateUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Plese login first to access this resource", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedData.id)

    next()

})

// check authorisation to access any resource or page

exports.authorisedRoles = (...roles) => {
    return (req, res, next)=>{

        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`, 403))
        }
        
        next()
    }
}