const Product = require("../model/productModel")
const ErrorHandler = require("../utils/ErrorHandler")
const catchAsyncError = require('../middleware/catchAsyncError')
const ApiFeatures = require("../utils/apiFeatures")

// create product
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
})

// Get all Products
exports.getAllProducts = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter()
    const products = await apiFeatures.query;
    res.status(200).json({ products })
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
exports.updateProduct = catchAsyncError( async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not found!", 404))
    }

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

exports.deleteProduct = catchAsyncError( async (req, res, next) => {
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