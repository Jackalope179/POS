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

exports.CheckAccount = async function(Numphone, password) {
    return await connection.awaitQuery(
        `SELECT * FROM account WHERE phone = '${Numphone}' AND password = '${password}'`
    )
}

exports.CheckPhone = async function(Numphone) {
    return await connection.awaitQuery(
        `SELECT * FROM account WHERE phone = '${Numphone}'`
    )
}

exports.InsertCustomer = async function(Phone, Pass, Name) {
    return await connection.awaitQuery(
        `INSERT INTO account (password, fullname, phone) VALUES ('${Pass}', '${Name}', '${Phone}')`
    )
}

exports.UpdateCustomer = async function(Phone, Pass) {
    return await connection.awaitQuery(
        `UPDATE account SET password ='${Pass}' WHERE phone = '${Phone}'`
    )
}