// poniżej przykład, w jaki sposób eksportować własny moduł

// najpierw jakiś kod, np. poniższy zestaw funkcji, wpisujemy do innego pliku w tym samym folderze, np. o nazwie np. "math.js";

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const div = (a, b) => a / b;

// potem eksportujemy w postaci obiektu:
// module.exports = { add, sub, mult, div }

// -----------------------------------------------------------------

// w pliku, do którego chcemy zaimportować nasz wyeksportowany moduł 
// wpisujemy reguire z podaniem ścieżki (bo nie jest to core module)
const math = require("./math") 
// a potem testujemy podając obiekt math i metodę add
console.log(math.add(10, 20)); 

// -----------------------------------------------------------------

// można to zrobić pojedynczo też tak (destrukturyzacja):
const { add } = require("./math")
console.log(add(12, 21));
// albo zbiorowo tak:
const { sub, mult, div } = require("./math");
console.log(add(121, 21));
console.log(sub(121, 21));
console.log(mult(121, 21));
console.log(div(121, 21));

// -------------------------------------------------------------------

// a można jeszcze tak, że w tym innym pliku, czyli math.js, wyeksportujemy tak:
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// exports.mult = (a, b) => a * b;
// exports.div = (a, b) => a / b;

// a w naszym pliku roboczym zaimportujemy tak:
const { add, sub, mult, div } = require("./math");
console.log(add(121, 21));
console.log(sub(121, 21));
console.log(mult(121, 21));
console.log(div(121, 21));


