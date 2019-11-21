var connection = require("./connection.js");

var orm = {

    selectAll: function (cb) {
        var queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function (err, results) {
            if (err) {
                throw error;
            };
            cb(results);
        });
    },

    insertOne: function (burger, cb) {
        var queryString = `INSERT INTO burgers (burger_name) VALUES (?)`;
        connection.query(queryString, [burger], function (err, results) {
            if (err) {
                throw error;
            };
            cb(results);
        });
    },

    updateOne: function (id, cb) {
        var queryString = `UPDATE burgers SET devoured = true WHERE id = ?`;
        connection.query(queryString, [id], function (err, results) {
            if (err) {
                throw error;
            };
            cb(results);
        });
    }

};

module.exports = orm;