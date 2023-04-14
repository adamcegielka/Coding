// OPERATORY PORÓWNANIA i LOGICZNE

console.log("Operatory Porównania i Logiczne");

let x = 4;
console.log(typeof x); // Określa rodzaj zmiennej x=number

// OPERATORY PORÓWNANIA:

let numberA = 8;
let numberB = 6;
let numberC = 8;
let numberD = "8";

console.log(numberA == numberC); // true
console.log(numberA == numberD); // true
console.log(numberA === numberD); // false - sprawdza dodatkowo czy typ jest taki sam
console.log(numberA != numberB); // true
console.log(numberA != numberD); // false
console.log(numberA !== numberD); // true
console.log(numberA >= numberB); // true
console.log(numberA <= numberB); // false
console.log(numberA > numberB); // true
console.log(numberA < numberB); // false

// OPERATORY LOGICZNE:

let numberE = true;
let numberG = false;

console.log(numberE || numberG); // "OR" -  true || false = true
console.log(numberE || numberE); // "OR" -  true || true = true
console.log(numberG || numberG); // "OR" -  true || false = false

console.log(numberE && numberE); // "AND" -  true &&| true = true
console.log(numberE && numberG); // "AND" -  true && false = false
console.log(numberG && numberG); // "AND" -  false && false = false

console.log(!numberE == numberE); // "! Negacja" -  (false) && true = false
console.log(!numberG == numberG); // "! Negacja" -  (true) && false = false
console.log(!numberE == numberG); // "! Negacja" -  (false) && false = true
