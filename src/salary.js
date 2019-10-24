const readlineSync = require("readline-sync");

const annual = Number(readlineSync.question("\nAnnual salary: "));

const four = .07;

const fed = .157;
const state = .0447;
const soc = .062;
const med = .0145;

const salary = (four * annual);

const total = ((salary * fed) + (salary * state) + (salary * soc) + (salary * fed));

const home = (salary - total);

console.log(home)
