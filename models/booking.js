let mysql = require("mysql-await");
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "POS",
    port: 3310
});

exports.getBooking = async function(phone) {
    return await connection.awaitQuery(`SELECT * FROM booking join account on accountID = id where phone = ${phone} `)
};

exports.saveBooking = async function(customerSeat, startTime, endTime, date, accountID, note) {
    await connection.awaitQuery(`INSERT INTO booking(customerSeat, startTime, endTime, date, accountID, note) VALUES(${customerSeat}, ${startTime}, ${endTime}, ${date}, ${accountID}, ${note})`)
}