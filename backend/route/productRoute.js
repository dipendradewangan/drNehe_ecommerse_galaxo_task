const router = require("express").Router()

// import all internal modules
const {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require("../controller/productController")
// create product
router.route("/product/new").post(createProduct)

// get all products
router.route("/products").get(getAllProducts)

// update products and delete products
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)


module.exports = router