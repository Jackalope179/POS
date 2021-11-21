let connection = require('../config')


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