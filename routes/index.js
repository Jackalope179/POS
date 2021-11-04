var express = require("express");
var router = express.Router();
var foodapi = require("../public/api/food.json");

/* GET home page. */
router.get("/", async function (req, res, next) {
  // let foodList = await food.getAllFood();
  res.render("index", {
    title: "POS restaurant",
    MenuArray: foodapi,
    array: [1, 2, 3],
  });
});

router.get("/error", function (req, res, next) {
  res.render("error", { title: "Express" });
});

module.exports = router;
