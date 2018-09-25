require('dotenv').config()
const mysql = require("mysql");

//creating db for burger_db
const connect = mysql.createConnection({
    host:     "localhost",
    port:     "3306", 
    user:     "root", 
    //password: process.env.DB_PASS,
    password: "SuperSecretPasswordHere",
    database: "burger_db" 
});

connect.connect( error => {
    if (error) throw error;

    console.log(`connection made => ${connect.threadId}`);
});

module.exports = connect;