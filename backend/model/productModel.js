const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter product name"]
    },
    description : {
        type : String,
        required : [true, "Please Enter Product Description"]
    },
    price : {
        type : Number,
        required : [true, "Please Enter Product Price"],
        maxLength : [8, "Price cannot exceed 8 digits"]
    },
    rating : {
        type : Number,
        default : 0
    },
    images : {
        public_id : {
            type : String,
            required : true
        },
        url : {
            type : String,
            required : true
        }
    },
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        required : [true, "Please enter product stock"],
        maxLength : [4, "Product cannot be exceed 4 charectors"],
        default : 1
    },
    numberOfReviews :  {
        type : Number,
        default : 0
    },
    reviews : [{
        name : {
            type : String,
            required : true
        },
        rating : {
            type : Number,
            required : true
        },
        comment : {
            type : String,
            required : true
        }
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }, 
    updatedAt : {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model("Product", productSchema)