var express = require("express");
var router = express.Router();

var MenuArray = [
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
  "HAMBURGER",
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    MenuArray: MenuArray,
    array: [1, 2, 3],
  });
});

module.exports = router;
