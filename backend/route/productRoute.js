const router = require("express").Router()

// import all internal modules
const { getAllProducts } = require("../controller/productController")


router.route("/products").get(getAllProducts)

module.exports = router