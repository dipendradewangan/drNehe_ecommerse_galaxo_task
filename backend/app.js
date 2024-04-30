const express = require('express');
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")
const dotenv = require("dotenv")

// imports all internal modules
const errorMiddleWare = require('./middleware/error')


// config 
dotenv.config({path : "backend/config/config.env"})

// route imports

const productRoute = require("./route/productRoute");
const userRoute = require("./route/userRoute")
const orderRoute = require("./route/orderRoute")
const paymentRoute = require("./route/paymentRoute")


// express app

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload({
    useTempFiles : true
}))

// route middleware

app.use("/api/v1", productRoute)

app.use("/api/v1", userRoute)

app.use("/api/v1", orderRoute)

app.use("/api/v1", paymentRoute)

// middleware for error
app.use(errorMiddleWare)

module.exports = app;