// let mysql = require("mysql-await");
// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pos",
// });

// exports.getAllFood = async function () {
//   return await connection.awaitQuery("SELECT * FROM food");
// };

// exports.getfoodbyName = async function (name) {
//   return await connection.awaitquery(
//     `SELECT * FROM food WHERE name like "%${name}%"`
//   );
// };
