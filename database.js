
// Get the mysql service
var mysql = require('mysql2');

require("dotenv").config({ path: ".env" });

// Add the credentials to access your database
var connection = mysql.createConnection({

    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASS,
    database : process.env.NAME

    // host     : '22656.v.tld.pl',
    // user     : 'admin22656_quizit_40',
    // password : 'MYSQLKankkunen123!!',
    // database : 'baza22656_quizit_40'

    // host     : 'db4free.net',
    // user     : 'myuser40',
    // password : 'mypassword40',
    // database : 'mybaza40'
});

// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Perform a query
$query = "INSERT INTO questions (question1, question2, answer) VALUES ('tralalala', 'hopsasa', '21')";

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});

// Close the connection
connection.end(function(){
    // The connection has been closed
});