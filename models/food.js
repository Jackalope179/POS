let mysql = require("mysql-await");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "POS",
  port: 3310
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
