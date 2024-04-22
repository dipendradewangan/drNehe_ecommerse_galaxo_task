const express = require("express");
const { isAuthenticateUser, authorisedRoles} = require("../middleware/auth");
const { newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder, deleteOrders } = require("../controller/orderController");
const router = express.Router();


router.route("/order/new").post(isAuthenticateUser, newOrder)
router.route("/order/:id").get(isAuthenticateUser,authorisedRoles("admin"), getSingleOrder)
router.route("/orders/me").get(isAuthenticateUser, myOrder)
router.route("/admin/orders").get(isAuthenticateUser, authorisedRoles("admin"), getAllOrders)
router.route("/admin/order/:id").put(isAuthenticateUser, authorisedRoles("admin"), updateOrder)
router.route("/admin/order/:id").delete(isAuthenticateUser, authorisedRoles("admin"), deleteOrders)

module.exports = router;