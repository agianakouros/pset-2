const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const min = 2.54

let a = width;
let b = length;

let c = a * min;
let d = b * min;

const perimeter = (c + c + d + d).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + a + "-by-" + b + "-inch sheet of paper has an perimeter of " + perimeter + " centimeter(s).");
