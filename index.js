// readFile, np. ./files/starter.txt (w pliku mamy kilka zdań);
// najpierw importujemy fs (file system) common core module:
const fs = require("fs");

// potem odwołujemy się do metody readFile, podając dwa parametry:
// ścieżkę do pliku i callback z errorem
fs.readFile("./files/starter.txt", (err, data) => {
    if (err) {
        throw err
    } else {
    console.log(data);
    }
});
// callback z errorem można zapisać prościej:
fs.readFile("./files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
});
// a data można skonwertować do stringa, żeby nie było buffer type:
fs.readFile("./files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
// albo dołożyć trzeci parametr, utf8:
fs.readFile("./files/starter.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// ten console.log jest tu tylko po to, aby pokazać, że node.js jest asynchroniczny
console.log("Asynchronous action");

// jeśli mamy błąd, czyli uncaught exeption, musimy go jeszcze obsłużyć, o tak:
process.on("uncaughtException", err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})


// zamiast podawać ścieżkę do pliku hardcoded, możemy użyć path,
// jest to bezpieczniejsze, ponieważ różne systemy
// w różną stronę pochylają slash: / albo \
const path = require("path");

fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err, data) => {
    if (err) throw err
    console.log(data);
})

// --------------------------------------------------------------

// writeFile (creating):
// const fs = require("fs");
// const path = require("path");
// podajemy nazwę pliku, który będziemy tworzyć, tutaj: reply.txt
// nie ma w callbacku data, ponieważ data dopiero tworzymy
// nie podajemy też parametru utf8, ponieważ jest on tutaj defaultowy
// ale za to podajemy jako parametr tekst do pliku, który tworzymy
// oczywiście zamiast ścieżki do pliku możemy zapisać: 
// (path.join(__dirname, "files", "reply.txt")
fs.writeFile("./files/reply.txt", "Nice to meet You", (err) => {
    if (err) throw err;
    console.log("Write complete");
})

// --------------------------------------------------------------

// appendFile (updating):
// const fs = require("fs");
// const path = require("path");
// append służy to updatowania pliku:
fs.appendFile("./files/reply.txt", "Nice to meet You", (err) => {
    if (err) throw err;
    console.log("Append complete");
})

// ale append może działać tak samo jak write (jeśli nie ma pliku)
fs.appendFile(path.join(__dirname, "files", "test.txt"), "\n\nAnother sample text", (err) => {
    if (err) throw err
    console.log("Append-update complete");
})

// natomiast z uwagi na asynchroniczność node
// jeśli tworzymy plik i od razu go updejtujemy, należy zrobić tak:
fs.writeFile("./files/reply2.txt", "Sample text", (err) => {
    if (err) throw err;
    console.log("Write complete");

    fs.appendFile(path.join(__dirname, "files", "reply2.txt"), "\n\nAnother sample text", (err) => {
        if (err) throw err
        console.log("Append-update-callback complete");
    })
})

// --------------------------------------------------------------

// rename:
// jeśli tworzymy plik, potem go aktualizujemy, a na koniec zmieniamy jego nazwę
// to znowu musimy zrobić takie combo z uwagi na asynchroniczność:
fs.writeFile("./files/reply3.txt", "Nice to meet You", (err) => {
    if (err) throw err;
    console.log("Write complete");

    fs.appendFile(path.join(__dirname, "files", "reply3.txt"), "\n\nYou to", (err) => {
        if (err) throw err
        console.log("Append-update-callback complete");

            fs.rename(path.join(__dirname, "files", "reply3.txt"), path.join(__dirname, "files", "reply4.txt"), (err) => {
            if (err) throw err
            console.log("Rename complete");
        })

    })
})

// --------------------------------------------------------------
// unlink (delete)
fs.unlink(path.join(__dirname, "files", "reply4.txt"), (err) => {
    if (err) throw err
    console.log("Unlink complete");
})


