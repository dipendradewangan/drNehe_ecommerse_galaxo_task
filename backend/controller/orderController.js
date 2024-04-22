const catchAsyncError = require("../middleware/catchAsyncError")
const Order = require("../model/orderModel");
const ErrorHandler = require("../utils/ErrorHandler");


// create a new order
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    // create a new order
    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        order
    })
})


// get single order -- admin
exports.getSingleOrder = catchAsyncError(async (req, res,next)=>{
    const order = await Order.findById(req.params.id).populate("user", "name email") ;
    
    if(!order){
        return next(new ErrorHandler("Order not found with this id",404))
    }

    res.status(200).json({
        success : true,
        order
    })
})

// get order by logged in user
exports.myOrder = catchAsyncError(async (req, res,next)=>{
    const order = await Order.find({user : req.user._id})

    res.status(200).json({
        success : true,
        order
    })
})

// get all orders -- admin
exports.getAllOrders = catchAsyncError(async (req, res,next)=>{
    const order = await Order.find()

    let totalAmount = 0;

    order.forEach((order)=>{
        totalAmount += order.totalPrice
    })


    res.status(200).json({
        success : true,
        totalAmount,
        order
    })
})


// update order status -- admin
exports.updateOrder = catchAsyncError(async (req, res, next)=>{
    const order = await Order.findById(req.params.id)

    console.log(order)

    if(order.orderStatus === "Delivered"){
        return next(new ErrorHandler("You have already delivered this order", 400))
    }

    order.orderItems.forEach(async (order)=>{
        await updateStock(order.product, order.quantity)
    })

    order.orderStatus = req.body.orderStatus;

    if(req.body.orderStatus === "Delivered"){
        order.deliverdAt = Date.now();
    }

    await order.save({
        validateBeforeSave : false 
    })

    res.status(200).json({
        success : true
    })
})


async function updateStock(id, quantity){

    const product = await Product.findById(id)
    product.stock -=quantity

    await product.save({
        validateBeforeSave : false
    })


}


// delete order
exports.deleteOrders = catchAsyncError(async(req, res, next)=>{
    const order = await Order.findById(req.params.id)

    if(!order){
        return next(new ErrorHandler("Order not found with this id", 404))
    }


    await Order.findByIdAndDelete(req.params.id)

    res.status(200).json(({
        success : true,
    }))
})
