const router = require("express").Router()

// import all internal modules
const {createProduct, getAllProducts, getProductDetails, updateProduct, deleteProduct, createProductReview, getProductReviews, delelteProductReview } = require("../controller/productController")
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


router.route("/reviews").put(isAuthenticateUser, createProductReview)

router.route("/reviews").get(isAuthenticateUser, getProductReviews)


router.route("/reviews").delete(isAuthenticateUser, delelteProductReview)

module.exports = router