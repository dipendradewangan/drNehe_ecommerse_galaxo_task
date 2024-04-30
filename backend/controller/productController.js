const Product = require("../model/productModel")
const ErrorHandler = require("../utils/ErrorHandler")
const catchAsyncError = require('../middleware/catchAsyncError')
const ApiFeatures = require("../utils/apiFeatures")
const cloudinary = require("cloudinary").v2


cloudinary.config({
    cloud_name: 'djwgbvtbw',
    api_key: '947777155231712',
    api_secret: '8oww2LYjDaPAO8VU3SdHw96VL_M'
});

// create product
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const file = req.files.image;
    const createdUser = req.user.id

    cloudinary.url(req.body.name, {
        width: 100,
        height: 150,
        crop: "fill",
        fetch_format: "auto",
        quality: 'auto',
        secure: true
    })

    cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'drnehaecommerse/products',
    }).then(async (result) => {
        console.log(result)

        const data = {
            ...req.body, createdUser, image: {
                url: result.url,
                public_id: result.public_id
            }
        }


        console.log(data)

        const product = await Product.create({
            ...req.body, createdUser, image: {
                url: result.url,
                public_id: result.public_id
            }
        })

        res.status(201).json({
            success: true,
            product
        })

    }).catch((err) => {
        res.status(500).json({
            success: false,
            err
        })
    })

})


// Get all Products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {

    const resultPerPage = 8

    const productCount = await Product.countDocuments()

    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeatures.query;
    res.status(200).json({
        success: true,
        productCount,
        products
    })
})




// get product details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product Not found!", 404))
    }

    res.status(200).json({
        success: true,
        product
    })
})


// Update Product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not found!", 404))
    }

    // set udateUser and updateDate and time

    req.body.updatedUser = req.user.id;
    req.body.updatedAt = new Date(Date.now())

    console.log(req.body)


    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        message: "Product updated successfully"
    })
})

// delete product 

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product Not found!", 404))
    }

    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })

})

// create new review or update the review

// exports.createProductReview = catchAsyncError(async (req, res, next)=>{
//     const {rating, comment, productId } = req.body
//     console.log(rating)
//     console.log(comment)
//     console.log(productId)

//     const review = {
//         user : 
//     }
// })



exports.createProductReview = catchAsyncError(async (req, res, next) => {
    const { rating, comment, productId } = req.body
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    )

    console.log(isReviewed)

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment)
        });
    }
    else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => avg += rev.rating)

    product.ratings = avg / product.reviews.length


    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    })
})


// get product reviews


exports.getProductReviews = catchAsyncError(async (req, res, next) => {

    const product = await Product.findById(req.query.productId)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

// delete product reviews
exports.delelteProductReview = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.query.productId)

    console.log(product)
    console.log(product.ratings)

    if (!product) {
        return next(new ErrorHandler("Product Not found!", 404))
    }

    const reviews = product.reviews.filter((rev) => rev._id.toString() !== req.query.reviewId.toString())

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating
    })


    let ratings = 0
    ratings = (avg / reviews.length)
    if (reviews.length === 0) {
        ratings = 0
    }





    console.log(ratings)

    const numOfReviews = reviews.length

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        reviews
    })
})




// exports.deleteProductIReview = catchAsyncError(async (req, res, next) => {
//
// })