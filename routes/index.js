var express = require("express");
var router = express.Router();
var foodapi = require("../public/api/food.json");
var cartapi = require("../public/api/cart.json");


/* GET home page. */
router.get("/", async function(req, res, next) {
    // let foodList = await food.getAllFood();
    res.render("menu", {
        title: "POS restaurant",
        MenuArray: foodapi,
        CartArray: cartapi,
        array: [1, 2, 3],
    });
});

router.get("/thanhtoan", async function(req, res, next) {
    // let foodList = await food.getAllFood();
    res.render("payment", {
        title: "POS restaurant",
        MenuArray: foodapi,
        CartArray: cartapi,
        array: [1, 2, 3],
    });
});

router.get("/datban", async function(req, res, next) {
    // let foodList = await food.getAllFood();
    res.render("tablebooking");
});

router.get("/login", async function(req, res, next) {
    res.render("login/login");
});

router.get("/register", async function(req, res, next) {
    res.render("register/register");
});

router.get("/register/confirmotp", async function(req, res, next) {
    res.render("register/confirmotp");
});

router.get("/forgotpassword", async function(req, res, next) {
    res.render("forgotpassword/forgotpassword");
});

router.get("/forgotpassword/confirmotp", async function(req, res, next) {
    res.render("forgotpassword/confirmotp");
});

console.log(foodapi);

router.get("/error", function(req, res, next) {
    res.render("error", { title: "Express" });
});



module.exports = router;