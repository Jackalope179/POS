let foodModel = require('../models/food')

class menuController {
    async getAllFood(req, res) {

        req.session.url = "/";

        let foodList = await foodModel.getAllFood();

        let data = {
            title: "POS restaurant",
            foodListRender: foodList,
        };
        // console.log("CartArray", req.session.food);
        if (req.session.login == 1) {
            data = {
                ...data,
                login: 1,
                CartArray: req.session.food,
                totalAmount: req.session.totalAmount,
            }
        }
        res.render("menu", data)

    }

    async searchFood(req, res) {
        req.session.url = "/";
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
    }
}
module.exports = new menuController();