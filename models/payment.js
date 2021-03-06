let connection = require('../config')

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

exports.getAllPayment = async function(paymentId) {
    return await connection.awaitQuery(
        `SELECT * FROM payment`
    )
}

exports.getAllFoodPayment = async function(paymentId) {
    return await connection.awaitQuery(
        `SELECT * FROM foodpayment`
    )
}