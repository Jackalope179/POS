let mysql = require("mysql-await");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pos",
  // port: 3310
});

exports.getAllFood = async function () {
  return await connection.awaitQuery("SELECT * FROM food");
};

exports.getFoodBySearch = async function (searchName) {
  searchName = searchName.trim().toUpperCase();
  return await connection.awaitQuery(
    `SELECT * FROM food where UPPER(trim(name)) like N'%${searchName}%'`
  );
};

exports.createOneFood = async function (values) {
  return await connection.awaitQuery(
    'INSERT INTO food SET ?', values
  )};

exports.deleteOneFood = async function (id) {
  return await connection.awaitQuery(
    `DELETE FROM food WHERE foodId = ?`, id
  );
};

exports.updateOneFood = async function (values) {
  return await connection.awaitQuery(
    'UPDATE food SET ? WHERE foodId = ?', [values, values.foodId]
  );
};
