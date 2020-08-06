var mysql = require("mysql");
const dotenv = require('dotenv').config();


// credentials 
var connection = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_NAME
});

connection.connect(function(err) {
if (err) throw (err);
});

connection.query("SET GLOBAL sql_mode = '';", function(err, results) {

        if (err) console.log(err);
      
        console.log('connected');

});    

module.exports = connection;
