const express = require('express');

// imports all internal modules

const productRoute = require("./route/productRoute")

const app = express();

app.use(express.json())

app.use("/api/v1", productRoute)

module.exports = app