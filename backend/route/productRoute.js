const router = require("express").Router()

// import all internal modules
const {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct } = require("../controller/productController")
const { isAuthenticateUser, authorisedRoles } = require("../middleware/auth")

// create product
router.route("/product/new").post(isAuthenticateUser, authorisedRoles("admin"), createProduct)

// get all products
router.route("/products").get(getAllProducts)

// update products and delete products and getproduct details
router
.route("/product/:id")
.put(isAuthenticateUser, authorisedRoles("admin"), updateProduct)
.delete(isAuthenticateUser, authorisedRoles("admin"), deleteProduct)
.get(getProductDetails)


module.exports = router