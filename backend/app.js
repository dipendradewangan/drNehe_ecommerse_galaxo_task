const express = require('express');

// imports all internal modules
const errorMiddleWare = require('./middleware/error')


// route imports

const productRoute = require("./route/productRoute")

const app = express();

app.use(express.json())

app.use("/api/v1", productRoute)

// middleware for error
app.use(errorMiddleWare)

module.exports = app;