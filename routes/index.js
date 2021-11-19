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

router.get("/register", async function(req, res, next) {
  res.render("register/register");
});

router.post("/register", async function(req, res, next) {
  res.render("register/register");
});

router.post("/register/checkPhone", async(req, res) => {
  let phoneNum = req.body.phone;
  await foodModel.CheckPhone(String(phoneNum)).then(function(result) {
      // console.log(result);
      if (result.length > 0) {
          res.json({
              status: "FOUND",
              data: result[0],
          });
      } else {
          res.json({
              status: "NOT_FOUND",
          });
      }
  });
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var OTP = 0;

router.post("/register/confirmotp", async function(req, res, next) {
  let phoneNum = req.body.phone;
  let pass = req.body.password;
  let name = req.body.fullname;
  OTP = getRndInteger(100000, 999999);
  console.log(OTP);
  res.render("register/confirmotp", { phone: phoneNum, password: pass, name: String(name) });
});



router.post("/register/checkOTP", async(req, res) => {
  let phoneNum = req.body.phone;
  let password = req.body.password;
  let name = req.body.name;
  let otp = req.body.otp;
  console.log(OTP);
  if (parseInt(otp) === OTP) {
      await foodModel.InsertCustomer(String(phoneNum), String(password), String(name));
      res.json({
          status: "TRUE",
      });
  } else {
      res.json({
          status: "FAIL",
      });
  }
});


router.post("/login", async function(req, res, next) {
  res.render("login/login");
});

router.post("/login/checkPhone", async(req, res) => {
  let phoneNum = req.body.phone;
  let pass = req.body.password;
  await foodModel.CheckAccount(String(phoneNum), String(pass)).then(function(result) {
      if (result.length > 0) {
          res.json({
              status: "FOUND",
              data: result[0],
          });
      } else {
          res.json({
              status: "NOT_FOUND",
          });
      }
  });
});

router.get("/forgotpassword", async function(req, res, next) {
  res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword", async function(req, res, next) {
  res.render("forgotpassword/forgotpassword");
});

router.post("/forgotpassword/checkPhone", async(req, res) => {
  let phoneNum = req.body.phone;
  await foodModel.CheckPhone(String(phoneNum)).then(function(result) {
      console.log(result);
      if (result.length > 0) {
          res.json({
              status: "FOUND",
              data: result[0],
          });
      } else {
          res.json({
              status: "NOT_FOUND",
          });
      }
  });
});


router.post("/forgotpassword/confirmotp", async function(req, res, next) {
  let phoneNum = req.body.phone;
  let new_pass = req.body.password;
  OTP = getRndInteger(100000, 999999);
  console.log(OTP);
  res.render("forgotpassword/confirmotp", { phone: phoneNum, password: new_pass });
});

router.post("/forgotpassword/checkOTP", async(req, res) => {
  let phoneNum = req.body.phone;
  let password = req.body.new_pass;
  let otp = req.body.otp;
  if (parseInt(otp) === OTP) {
      await foodModel.UpdateCustomer(String(phoneNum), String(password));
      res.json({
          status: "TRUE",
      });
  } else {
      res.json({
          status: "FAIL",
      });
  }
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

router.get("/error", function (req, res, next) {
  res.render("error", { title: "Express" });
});

module.exports = router;
