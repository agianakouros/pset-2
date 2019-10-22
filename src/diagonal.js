const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

let a = width;
let b = length;

const diagonal = Math.hypot(a, b).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + a + "-by-" + b + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).");
