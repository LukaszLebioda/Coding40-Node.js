// z lekcji o filesystem wiemy, że node jest asynchroniczny
// i np. jeśli tworzymy plik, potem go aktualizujemy, a na koniec zmieniamy jego nazwę, to musimy użyć wielu callbacków, żeby mieć pewność
// że wszystkie te zmiany nastąpią we właściwej kolejności
// tworzy nam się niestety CALLBACK HELL:
const fs = require("fs");
const path = require("path");

fs.writeFile("./files/callbackHell1.txt", "Nice to meet You", (err) => {
    if (err) throw err;
    console.log("Write complete");

    fs.appendFile(path.join(__dirname, "files", "callbackHell1.txt"), "\n\nYou to", (err) => {
        if (err) throw err
        console.log("Append-update-callback complete");

            fs.rename(path.join(__dirname, "files", "callbackHell1.txt"), path.join(__dirname, "files", "callbackHell2.txt"), (err) => {
            if (err) throw err
            console.log("Rename complete");
        })

    })
})

// zatem możemy zrobić coś na wzór async i await w vanilla js:
const fsPromises = require("fs").promises;
// const path = require("path"); już wyżej zadeklarowane

// i tworzymy funkcję asynchroniczną:
const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "callbackHell2.txt"), "utf8");
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, "files", "callbackHell3.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "files", "callbackHell3.txt"), "\n\nOh my god");
        await fsPromises.rename(path.join(__dirname, "files", "callbackHell3.txt"), path.join(__dirname, "files", "callbackHell4.txt"));
    } catch (err) {
        console.error(err);
    }
}
fileOps();

