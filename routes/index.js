var express = require("express");
var router = express.Router();
var foodapi = require("../public/api/food.json");
var cartapi = require("../public/api/cart.json");


/* GET home page. */
router.get("/", async function(req, res, next) {
    // let foodList = await food.getAllFood();
    res.render("index", {
        title: "POS restaurant",
        MenuArray: foodapi,
        CartArray: cartapi,
        array: [1, 2, 3],
    });
});

router.get("/thanhtoan", async function(req, res, next) {
    // let foodList = await food.getAllFood();
    res.render("payment");
});

console.log(foodapi);

router.get("/error", function(req, res, next) {
    res.render("error", { title: "Express" });
});

module.exports = router;