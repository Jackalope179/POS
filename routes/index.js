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

// <<<<<<< HEAD
// =======
// router.get('/error', function(req, res, next) {
//   res.render('error', { title: 'Express' });
// });

// >>>>>>> 36c083ac033fa6ffc2795ef4fa143e4513ba86f7
module.exports = router;
