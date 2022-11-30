// // Get the mysql service
// var mysql = require('mysql2');

// // Add the credentials to access your database
// var connection = mysql.createConnection({
//     host     : 'db4free.net',
//     user     : 'myuser40',
//     password : 'mypassword40',
//     database : 'mybaza40'
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO questions (question1, question2, answer) VALUES ('pytankoa', 'pytankob', '2')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });


// Get the mysql service
var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({
    host     : 'db4free.net',
    user     : 'myuser40',
    password : 'mypassword40',
    database : 'mybaza40'
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
$query = "INSERT INTO questions (question1, question2, answer) VALUES ('brzdąc', 'hrubuś', '3')";

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