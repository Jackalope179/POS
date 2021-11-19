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
    // console.log(req.body);

    req.session.phone = req.body.phone;
    req.session.password = req.body.password;
    req.session.login = 1;

    res.render("payment", {
        login: 1,
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/payment", async function(req, res, next) {
    let login = 0
    if (req.session.login == 1)
        login = req.session.login;
    res.render("payment", {
        login: login,
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

    let login = 0;
    if (req.session.login == 1)
        login = 1
    res.render("payment", {
        login: login,
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/thanhtoan", async function(req, res, next) {
    let login = 0;
    if (req.session.login == 1)
        login = 1
    res.render("payment", {
        login: login,
        CartArray: req.session.food,
        totalAmount: req.session.totalAmount,
    });
});

router.get("/datban", async function(req, res, next) {
    let login = 0;
    let phone = 0;

    if (req.session.login == 1) {
        login = 1
        phone = req.session.phone
    }
    console.log(phone);
    let bookingList = await bookingModel.getBooking(phone);

    let bookingListRender = bookingList.map(booking => {
        let dateString = booking.date.getDate() + "/" + (booking.date.getMonth() + 1) + "/" + booking.date.getFullYear();

        return {
            ...booking,
            date: dateString,
        }
    })

    console.log("Booking", bookingList);
    res.render("tablebooking", {
        login: login,
        bookingList: bookingListRender
    });
});


router.get("/login", async function(req, res, next) {
    res.render("login/login");
});

router.post("/savebooking", async function(req, res, next) {
    // console.log(req.body);

    let customerSeat = req.body.customerSeat;
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;
    let note = req.body.note;
    let date = req.body.date;

    await this.bookingModel.saveBooking(customerSeat, startTime, endTime, date, accountID, note);
    res.redirect("/datban");
})


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

router.post("/account-admin/deleteClerk", adminController.deleteClerk);

router.post("/account-admin/addClerk", adminController.addClerk);

// router.post("/forgotpassword/confirmotp", async function(req, res, next) {
//     res.render("forgotpassword/confirmotp");
// });

router.get("/error", function(req, res, next) {
    res.render("error", { title: "Express" });
});

module.exports = router;