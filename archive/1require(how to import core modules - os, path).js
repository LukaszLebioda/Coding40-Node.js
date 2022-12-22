//wyświetla obiekt globalny (w node nie ma obiektu window, jest tylko mniejszy od niego obiekt globalny)
// console.log(global);

// require os - importuje do naszego projektu dany moduł (tutaj "os", czyli core module, moduł lokalny, moduł systemowy);

const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// wyświetla ścieżkę do katalogu oraz lokalizację do pliku, w którym pracujemy;

console.log("-------------------------------------")

console.log(__dirname);
console.log(__filename);

console.log("-------------------------------------")

// require path: wyświetla wszystkie niezbędne informacje o lokalizacji i pliku, w którym pracujemy,, a metoda parse wyświetla te informacje jako obiekt;

const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));