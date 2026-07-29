const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost:5555",
    user: "root",
    password: "sahilkumar@8781",
    database: "airbnb"
});

module.exports = pool.promise();