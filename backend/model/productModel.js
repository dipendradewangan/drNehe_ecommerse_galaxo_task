const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product name"]
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 digits"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [4, "Product cannot be exceed 4 charectors"],
        default: 1
    },
    isTopSelling: {
        type: Boolean,
        default: false
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isRecommended: {
        type: Boolean,
        default: false
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdUser: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"

    },

    updatedUser: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    }
})


module.exports = mongoose.model("Product", productSchema)