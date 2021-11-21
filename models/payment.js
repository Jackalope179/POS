let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pos",
    port: 3306
});

exports.insertPayment = async function(paymentid, total, accountId) {
    return await connection.awaitQuery(
        `INSERT INTO payment (paymetid, totalPrice, accoutID) VALUES (${paymentid},${total}, 0)`
    )
}

exports.insertFood = async function(name, price, amount, paymentId) {
    return await connection.awaitQuery(
        `INSERT INTO foodpayment (Name, Price, amount, paymentid) VALUES ('${name}',${price},${amount}, ${paymentId})`
    )
}

exports.CheckPayment = async function(paymentId) {
    return await connection.awaitQuery(
        `SELECT * FROM payment WHERE paymetid = ${paymentId}`
    )
}