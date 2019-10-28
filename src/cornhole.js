const readlineSync = require("readline-sync");


const length = Number(48);
const width = Number(24);
const diameter = Number(6);
const radius = diameter / 2

const circleArea = (radius * radius * Math.PI);

const boardNoCircle = (length * width);

let totalBoard = (boardNoCircle - circleArea).toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + totalBoard + " square inch(es).")
