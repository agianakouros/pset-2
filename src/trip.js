const readlineSync = require("readline-sync");



const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));


const bus = Number(readlineSync.question("Bus capacity: "));


const total = (students + teachers)
const busnumber = Math.floor((total/bus) + 1);   //I'm doing +1 because you need one extra bus for the people that make up the remainder.//

console.log("\n" + busnumber + " bus(es) is (are) needed, with " + (total % bus) + " passenger(s) on the last bus.")
