const foodModel = require("../models/food")

class adminController {

    async getAllFood(req, res, next) {
        let categoryApi = require("../public/api/category.json");
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

        res.render("admin/menu1", {
          title: "POS restaurant Management",
          foodListRender: foodListRender,
          numberofActiveRender: numberofActiveRender,
          numberofInactiveRender: numberofInactiveRender,
        });
      };
};

module.exports = new adminController();