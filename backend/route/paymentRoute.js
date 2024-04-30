const express = require("express");
const router = express.Router();



const { processPayment, sendStripApiKey } = require("../controller/paymentController");
const {isAuthenticateUser } = require("../middleware/auth")


router.route("/payment/process").post(isAuthenticateUser, processPayment);

router.route("/stripeapikey").get(isAuthenticateUser, sendStripApiKey)
module.exports = router;