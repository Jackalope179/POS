const payment = require("../models/payment")

function NumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ID = 0;

class paymentController {
    async processPayment(req, res) {
        var total = req.body.total;
        if (total !== 0) {
            var food = req.body.food;
            ID = getRndInteger(1, 10000);
            while (true) {
                var check = false;
                await payment.CheckPayment(ID).then(function(result) {
                    if (result.length > 0) {
                        ID = getRndInteger(1, 10000);
                    } else {
                        check = true;
                    }
                });
                if (check) {
                    break;
                }
            }
            console.log(ID);
            await payment.insertPayment(ID, total, 0);

            for (var i = 0; i < food.length; i++) {
                var text = food[i];
                var parsefood = text.split(' ');
                var name = parsefood[0];
                for (var j = 1; j < parsefood.length - 2; j++) {
                    name = name + ' ' + parsefood[j];
                }
                var price = parseInt(parsefood[parsefood.length - 2]) * 1000;
                var amount = parsefood[parsefood.length - 1];
                await payment.insertFood(name, price, amount, ID);
            }
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    };

    async returnPayment(req, res) {

        req.session.phone = req.body.phone;
        req.session.password = req.body.password;
        req.session.login = 1;

        console.log(req.session.url);
        res.redirect(req.session.url);
    }

    async getPaymentPage(req, res, next) {
        req.session.url = "/payment";

        let login = 0
        if (req.session.login == 1) {
            login = req.session.login;
        }

        return res.render("payment", {
            login: login,
            CartArray: req.session.food,
            totalAmount: req.session.totalAmount,
        });
    }

    async getPayment(req, res, next) {

        req.session.url = "/payment";

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
        if (req.session.login == 1) {
            login = 1;
        }
        return res.render("payment", {
            login: login,
            CartArray: req.session.food,
            totalAmount: req.session.totalAmount,
        });
    }
};

module.exports = new paymentController();