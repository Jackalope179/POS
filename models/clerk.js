let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
<<<<<<< HEAD
    database: "pos",
    port: 3306
=======
    database: "pos"
        // port: 3310
>>>>>>> d3d78b024f98c05f8996a8851437ff3e754504e2
});

exports.getAllClerk = async function() {
    return await connection.awaitQuery("SELECT * FROM clerk");
};


exports.createOneClerk = async function(values) {
    return await connection.awaitQuery(
        'INSERT INTO clerk SET ?', values
    )
};

exports.deleteOneClerk = async function(phone) {
    return await connection.awaitQuery(
        `DELETE FROM clerk WHERE phone = ?`, phone
    );
};

exports.updateOneClerk = async function(values) {
    return await connection.awaitQuery(
        'UPDATE clerk SET ? WHERE foodId = ?', [values, values.ID]
    );
};