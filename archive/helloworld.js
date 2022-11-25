// SYNTAX:

const http = require("http"); // require - includes a core module we need (in this case http to make Node.js act as an HTTP server)

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// ---------------------------------------------------------

// // console:
// // wyświetla w konsoli informację:
// console.log("Some dummy content of mine"); 

// // wyświetla w konsoli błąd:
// console.error(new Error("Critical error, the computer will shut down"));  

// // wyświetla w konsoli ostrzeżenie:
// const name = "Łukasz";  
// const age = 40;
// console.warn(`Your name is ${name} and You're ${age} years old`); 


