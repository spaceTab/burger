require('dotenv').config()
const mysql = require("mysql");
const connection;
//creating db for burger_db

=

if (process.env.JAWSDB_URL) {
    connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connect = mysql.createConnection({
        host:     "localhost",
        port:     "3306", 
        user:     "root", 
        password: "SuperSecretPasswordHere",
        database: "burger_db" 
    });
}

connection.connect( error => {
    if (error) throw error;

    console.log(`connection made => ${connect.threadId}`);
});

module.exports = connect;