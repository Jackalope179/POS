var express = require("express");
var router = express.Router();
// Body parser
var bodyParser = require("body-parser");
let categoryApi = require("../public/api/category.json");

// Get model
var foodModel = require("../models/food");

// Menu home page
router.get("/", async function (req, res, next) {
  // console.log(req.body);
  let foodList = await foodModel.getAllFood();

  // food in first carousel
  let numberofActive = [0, 1, 2];

  // food in second carrousel
  let numberofInactive = [3, 5, 6, 7];

  let numberofActiveRender = numberofActive.map(function (item) {
    return {
      number: item,
      categoryList: categoryApi[item],
    };
  });

  let numberofInactiveRender = numberofInactive.map(function (item) {
    return {
      number: item,
      categoryList: categoryApi[item],
    };
  });

  let foodListRender = foodList.map(function (item) {
    return Object({
      ...item,
    });
  });
  res.render("menu", {
    title: "POS restaurant",
    foodListRender: foodListRender,
    numberofActiveRender: numberofActiveRender,
    numberofInactiveRender: numberofInactiveRender,
  });
});

function NumberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
  return x;
}

router.post("/search", async function (req, res) {
  let foodSearch = JSON.parse(JSON.stringify(req.body));
  let searchResult = await foodModel.getFoodBySearch(foodSearch.search);

  let foodList = await foodModel.getAllFood();
  let numberofActive = [0, 1, 2];

  // food in second carrousel
  let numberofInactive = [3, 5, 6, 7];

  let numberofActiveRender = numberofActive.map(function (item) {
    return {
      number: item,
      categoryList: categoryApi[item],
    };
  });

  let numberofInactiveRender = numberofInactive.map(function (item) {
    return {
      number: item,
      categoryList: categoryApi[item],
    };
  });

  res.render("menu", {
    title: "POS restaurant",
    searchName: foodSearch.search,
    search: true,
    foodSearched: searchResult,
    foodListRender: foodList,
    numberofActiveRender: numberofActiveRender,
    numberofInactiveRender: numberofInactiveRender,
  });
});
// Menu payment post
router.post("/thanhtoan", async function (req, res, next) {
  let foodapi = req.body;
  let foodArray = foodapi.cartList.split("\n");
  let foodjson = [];
  foodArray.forEach(function (item) {
    if (item != "") {
      let foodAttribute = item.split(",");
      foodjson.push({
        name: foodAttribute[0],
        image: foodAttribute[1],
        quantity: foodAttribute[2],

        price: Number(foodAttribute[3]?.split("\r")[0]).toLocaleString(
          "vi-VN",
          { style: "currency", currency: "VND" }
        ),
      });
    }
  });
  res.render("payment", {
    CartArray: foodjson,
    totalAmount: NumberWithCommas(foodapi.totalPrice),
  });
});

router.get("/thanhtoan", async function (req, res, next) {
  res.render("payment", {
    title: "POS restaurant",
  });
});

router.get("/datban", async function (req, res, next) {
  res.render("tablebooking");
});

router.get("/login", async function (req, res, next) {
  res.render("login/login");
});

router.post("/", async function (req, res, next) {
  res.render("menu", {
    title: "POS restaurant",
    MenuArray: foodapi,
    CartArray: cartapi,
    array: [1, 2, 3],
  });
});

router.get("/register", async function (req, res, next) {
  res.render("register/register");
});

router.post("/register/confirmotp", async function (req, res, next) {
  res.render("register/confirmotp");
});

router.post("/login", async function (req, res, next) {
  res.render("login/login");
});

router.get("/forgotpassword", async function (req, res, next) {
  res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword/confirmotp", async function (req, res, next) {
  res.render("forgotpassword/confirmotp");
});

router.get("/menu-admin", async function (req, res, next) {
  res.render("admin/menu", {
    title: "Admin Menu",
    MenuArray: foodapi,
  });
});
router.get("/ordered-admin", async function (req, res, next) {
  res.render("admin/ordered", {
    title: "Admin Ordered",
    MenuArray: foodapi,
  });
});
router.get("/account-admin", async function (req, res, next) {
  res.render("admin/account", {
    title: "Admin Account",
    MenuArray: foodapi,
  });
});
// router.post("/forgotpassword/confirmotp", async function(req, res, next) {
//     res.render("forgotpassword/confirmotp");
// });

router.get("/error", function (req, res, next) {
  res.render("error", { title: "Express" });
});

module.exports = router;
