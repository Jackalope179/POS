const payment = require("../models/payment")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ID = 0;

class paymentController {
    async processPayment(req, res) {
        var total = req.body.total;
<<<<<<< HEAD
        if (total !== 0) {
=======
        if (total!==0){
>>>>>>> 0125b96bdf0c54bcf60a075043554e43c6f14734
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
            req.session.food = {};
            req.session.totalAmount = 0;
            res.redirect('/');
<<<<<<< HEAD
        } else {
=======

        }
        else{
>>>>>>> 0125b96bdf0c54bcf60a075043554e43c6f14734
            res.redirect('/');
        }
    };
};

module.exports = new paymentController();