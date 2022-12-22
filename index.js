// // czytanie pliku, np. ./files/starter.txt (w pliku mamy kilka zdań);

// najpierw importujemy fs (file system) common core module:
const fs = require("fs");

// potem odwołujemy się do metody readFile, podając dwa paramatry:
// ścieżkę do pliku i callback z errorem
fs.readFile("./files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// // wylogowane dane są prezentowane jako buffer data
// // zatem żeby odczytać zawartość pliku, parsujemy o tak"
// const fs = require("fs");

// fs.readFile("./files/starter.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// a zamiast parsowania można dołożyć kolejny parametr (utf-8):
// const fs = require("fs");

// fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });



