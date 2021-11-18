const foodModel = require("../models/food")

class adminController {

    async getAllFood(req, res) {
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


      async getAllOrder(req, res) {
        res.render("admin/ordered", {
          title: "Admin Ordered",
          array: [1, 2, 3],
        });
      };

      async getAllAccount(req, res) {
        res.render("admin/account", {
          title: "Admin Account",
          array: [1, 2, 3],
        });
      };

      async updateFood(req, res, next) {
        foodModel.updateOneFood(req.body).then(() => res.redirect('/menu-admin')).catch(error => next(error));
      };

      async addFood(req, res, next) {
        foodModel.createOneFood(req.body).then(() => res.redirect('/menu-admin')).catch(error => next(error));
      };

      async deleteFood(req, res, next) {
        foodModel.deleteOneFood(req.body.foodId).then(() => res.redirect('/menu-admin')).catch(error => next(error));
      };

};

module.exports = new adminController();