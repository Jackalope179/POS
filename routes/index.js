var express = require("express");
var router = express.Router();
// Body parser
var bodyParser = require("body-parser");
let categoryApi = require("../public/api/category.json");

// Get model
var foodModel = require("../models/food");
let bookingModel = require("../models/booking")


//GET ADMIN_CONTROLLER
const adminController = require("../controllers/adminController")

const loginController = require("../controllers/loginController")

const paymentController = require("../controllers/paymentController")

const menuController = require("../controllers/menuController")

const bookingController = require("../controllers/bookingController")


// Menu home page
router.get("/", menuController.getAllFood);


// After login
router.post("/payment", paymentController.returnPayment);

router.get("/payment", paymentController.getPaymentPage);

router.post("/search", menuController.searchFood);
// Menu payment post
router.post("/thanhtoan", paymentController.getPayment);

router.get("/logout", loginController.logout)

router.get("/thanhtoan", async function(req, res, next) {

    req.session.url = "/thanhtoan";

    let login = 0;
    if (req.session.login == 1) {
        login = 1;
    }
    return res.render("payment", {
        login: login,
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/datban", bookingController.getTableBookingPage);

router.post("/deleteBooking", bookingController.deleteBooking)


router.post("/savebooking", bookingController.saveBooking)

router.get("/login", loginController.getLoginPage);

router.get("/register", async function(req, res, next) {
    res.render("register/register");
});

router.post("/register", async function(req, res, next) {
    res.render("register/register");
});

router.post("/register/checkPhone", loginController.checkPhone);

router.post("/register/confirmotp", loginController.registerOTP);

router.post("/register/checkOTP", loginController.registerCheckOTP);

router.post("/login", async function(req, res, next) {
    res.render("login/login");
});

router.post("/login/checkPhone", loginController.checkAccount);

router.get("/forgotpassword", async function(req, res, next) {
    res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword", async function(req, res, next) {
    res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword/checkPhone", loginController.forgotpasswordCheckAccount);

router.post("/forgotpassword/confirmotp", loginController.forgotpasswordOTP);

router.post("/forgotpassword/checkOTP", loginController.forgotpasswordCheckOTP);

router.post("/login", async function(req, res, next) {
    res.render("login/login");
});

router.get("/forgotpassword", async function(req, res, next) {
    res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword/confirmotp", async function(req, res, next) {
    res.render("forgotpassword/confirmotp");
});


router.post('/processPayment', paymentController.processPayment);



/////// ADMIN //////////////

// Render menu page for admin
router.get("/menu-admin", adminController.getAllFood);

// Render order history for admin
router.get("/ordered-admin", adminController.getAllOrder);

// Render account info for admin
router.get("/account-admin", adminController.getAllAccount);

router.post("/menu-admin/updateFood", adminController.updateFood);

router.post("/menu-admin/addFood", adminController.addFood);

router.post("/menu-admin/deleteFood", adminController.deleteFood);

router.post("/account-admin/deleteClerk", adminController.deleteClerk);

router.post("/account-admin/addClerk", adminController.addClerk);

// router.post("/forgotpassword/confirmotp", async function(req, res, next) {
//     res.render("forgotpassword/confirmotp");
// });

router.get("/error", function(req, res, next) {
    res.render("error", { title: "Express" });
});

module.exports = router;