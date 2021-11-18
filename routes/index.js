var express = require("express");
var router = express.Router();
// Body parser
var bodyParser = require("body-parser");
let categoryApi = require("../public/api/category.json");

// Get model
var foodModel = require("../models/food");


//GET ADMIN_CONTROLLER
const adminController = require("../controllers/adminController")

// Menu home page
router.get("/", async function(req, res, next) {
    let foodList = await foodModel.getAllFood();

    let data = {
        title: "POS restaurant",
        foodListRender: foodList,
    };
    console.log("CartArray", req.session.food);
    // console.log("total", totalAmount)
    if (req.session.login == 1) {
        data = {
            ...data,
            login: 1,
            CartArray: req.session.food,
            totalAmount: req.session.totalAmount,
        }
    }
    res.render("menu", data)

});

router.post("/payment", async function(req, res, next) {
    req.session.login = 1;
    res.render("payment", {
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});
router.get("/payment", async function(req, res, next) {
    res.render("payment", {
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});


function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
}

router.post("/search", async function(req, res) {
    let foodSearch = JSON.parse(JSON.stringify(req.body));
    let searchResult = await foodModel.getFoodBySearch(foodSearch.search);
    let foodList = await foodModel.getAllFood();

    let data = {
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
        title: "POS restaurant",
        searchName: foodSearch.search,
        search: true,
        foodSearched: searchResult,
        foodListRender: foodList,
    };

    if (req.session.login == 1) {
        data = {
            ...data,
            login: 1,
            CartArray: req.session.food,
            totalAmount: req.session.totalAmount,
        }
    }
    res.render("menu", data)
});
// Menu payment post
router.post("/thanhtoan", async function(req, res, next) {
    let foodapi = req.body;
    let foodArray = foodapi.cartList.split("\n");
    let foodjson = [];
    foodArray.forEach(function(item) {
        if (item != "") {
            let foodAttribute = item.split(",");
            foodjson.push({
                name: foodAttribute[0],
                image: foodAttribute[1],
                quantity: foodAttribute[2],
                price: NumberWithCommas(Number(foodAttribute[3].split("\r")[0])),
            });
        }
    });
    req.session.food = foodjson;
    req.session.totalAmount = NumberWithCommas(foodapi.totalPrice)
        // console.log(req.session.food);
    res.render("payment", {
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/thanhtoan", async function(req, res, next) {
    res.render("payment", {
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/datban", async function(req, res, next) {
    res.render("tablebooking");
});

router.get("/login", async function(req, res, next) {
    res.render("login/login");
});



router.get("/register", async function(req, res, next) {
    res.render("register/register");
});

router.post("/register/confirmotp", async function(req, res, next) {
    res.render("register/confirmotp");
});

router.post("/login", async function(req, res, next) {
    res.render("login/login");
});

router.get("/forgotpassword", async function(req, res, next) {
    res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword/confirmotp", async function(req, res, next) {
    res.render("forgotpassword/confirmotp");
});

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

// router.post("/forgotpassword/confirmotp", async function(req, res, next) {
//     res.render("forgotpassword/confirmotp");
// });

router.get("/error", function(req, res, next) {
    res.render("error", { title: "Express" });
});

module.exports = router;