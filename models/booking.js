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

exports.getBooking = async function(phone) {
    return await connection.awaitQuery(`SELECT * FROM booking join account on accountID = id where phone = ${phone} `)
};

exports.saveBooking = async function(customerSeat, startTime, endTime, date, note, phone) {
    let id = (await connection.awaitQuery(`SELECT id from account where phone = ${phone}`))[0].id;
    console.log(id);
    await connection.awaitQuery(`INSERT INTO booking(customerSeat, startTime, endTime, date, accountID, note) VALUES(${customerSeat}, '${startTime}:00', '${endTime}:00', '${date}', ${id}, '${note}')`)
}
exports.deleteBooking = async function(id) {
    await connection.awaitQuery(`DELETE FROM booking WHERE BookingId = ${id}`)
}