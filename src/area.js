const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");


const min = 25.4


let a = width;
let b = length;

let c = a * min;
let d = b * min;

const area = (c * d).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});




console.log("\nA(n) " + a + "-by-" + b + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
