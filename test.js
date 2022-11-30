// // Get the mysql service
// var mysql = require('mysql2');

// // Add the credentials to access your database
// var connection = mysql.createConnection({
//     host     : '22656.m.tld.pl',
//     user     : 'admin22656_quizit_40',
//     password : 'MYSQLKankkunen123!!',
//     database : 'baza22656_quizit_40'
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO questions (question1, question2, answer) VALUES ('pytankoa', 'pytankob', 'odpo')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

// var mysql = require('mysql2');

// var con = mysql.createConnection({
//     host     : '22656.m.tld.pl',
//     user     : 'admin22656_quizit_40',
//     password : 'MYSQLKankkunen123!!',
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
    host     : '22656.m.tld.pl',
    user     : 'admin22656_quizit_40',
    password : 'MYSQLKankkunen123!!',
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});