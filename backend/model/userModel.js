const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/ErrorHandler")
const crypto = require("crypto")




const userModal = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [50, "Name can nat exceed 50 charectors"],
        minLength: [4, "Name shoud have more than 3 charectors"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: true,
        validate : [validator.isEmail, "Please Enter a valid email"]
    },
    phone : {
        type : String,
        required : [true, "Please enter your phone number"],
        default :"0"
    },
    password: {
        type: String,
        required: [true, "Please Enter your password"],
        minLength: [8, "Password should have more than 7 charectors"],
        select: false
    },

    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },

    role: {
        type: String,
        default: "user"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})


// hashing password

userModal.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// get JWT TOKEN
userModal.methods.getJWTToken = function(){
    return jwt.sign({id : this._id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRE
    })
}


// compare password

userModal.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generating password reset token

userModal.methods.getResetPasswordToken = function(){
    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex")
    // hashing and adding resetPasswordToken to userSchema

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire = Date.now() + 15*60*1000

    return resetToken
}

module.exports = mongoose.model("User", userModal)


