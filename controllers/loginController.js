const foodModel = require("../models/login")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var OTP = 0;

class loginController {

    async checkPhone(req, res) {
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
    };

    async registerOTP(req, res, next) {
        let phoneNum = req.body.phone;
        let pass = req.body.password;
        let name = req.body.fullname;
        OTP = getRndInteger(100000, 999999);
        console.log(OTP);
        res.render("register/confirmotp", { phone: phoneNum, password: pass, name: String(name) });
    };

    async registerCheckOTP(req, res) {
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
    };

    async checkAccount(req, res) {
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
    };

    async forgotpasswordCheckAccount(req, res) {
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
    };

    async forgotpasswordOTP(req, res, next) {
        let phoneNum = req.body.phone;
        let new_pass = req.body.password;
        OTP = getRndInteger(100000, 999999);
        console.log(OTP);
        res.render("forgotpassword/confirmotp", { phone: phoneNum, password: new_pass });
    };

    async forgotpasswordCheckOTP(req, res, next) {
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
    };

};

module.exports = new loginController();