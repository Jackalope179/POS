let mysql = require("mysql-await");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

exports.deleteOneFood = async function (id) {
      return await connection.awaitQuery(`Delete FROM products where id = %${id}%`);
};

exports.insertOneFood = async function () {
    return await connection.awaitQuery(`Delete FROM products where id = %${id}%`);
};

exports.updateOneFood = async function (id) {
    return await connection.awaitQuery(`Delete FROM products where id = %${id}%`);
};

