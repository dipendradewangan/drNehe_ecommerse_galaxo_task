const express = require('express');
const cookieParser = require("cookie-parser")

// imports all internal modules
const errorMiddleWare = require('./middleware/error')


// route imports

const productRoute = require("./route/productRoute");
const userRoute = require("./route/userRoute")


// express app

const app = express();

app.use(express.json())
app.use(cookieParser())

// route middleware

app.use("/api/v1", productRoute)


app.use("/api/v1", userRoute)

// middleware for error
app.use(errorMiddleWare)

module.exports = app;