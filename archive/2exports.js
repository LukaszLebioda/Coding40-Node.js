// poniżej przykład, w jaki sposób eksportować własny moduł
// najpierw poniższy kod wpisujemy do innego pliku w tym samym folderze
// o nazwie np. "math.js";

// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const div = (a, b) => a - b;
// module.exports = { add, sub, mult, div }

// // w pliku, do którego chcemy zaimportować, podajemy komendę:
// const math = require("./math")
// console.log(math.add(10, 20));

// // można to zrobić też tak:
// const { add } = require("./math")
// console.log(add(12, 21));

// // można też zaimportować waystkie funkcje z tej drugiej metody:
// const { add, sub, mult, div } = require("./math");
// console.log(add(121, 21));
// console.log(sub(121, 21));
// console.log(mult(121, 21));
// console.log(div(121, 21));

// a można jeszcze tak, że w innym pliku, np. math.js, napiszemy tak:
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
// exports.mult = (a, b) => a * b;
// exports.div = (a, b) => a / b;

const { add, sub, mult, div } = require("./math");
console.log(add(121, 21));
console.log(sub(121, 21));
console.log(mult(121, 21));
console.log(div(121, 21));


