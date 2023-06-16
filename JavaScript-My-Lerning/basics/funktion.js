console.log("Function:");

function nameFunction(a, b) {
    let result = a * b;
    return result;
}
let values = nameFunction(4, 7);
console.log("Multiplication result: " + values);

console.log("---- NEXT ----");

function add(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
add(8, 9);

console.log("---- NEXT ----");

function returnAdd(num1, num2) {
    let result = num1 + num2;
    return result;
}
const myResult = returnAdd(18, 9);
console.info(myResult);

console.log("---- NEXT ----");

const x = (num1, num2) => num1 + num2;
const arrowResult = x(28, 9);
console.warn(arrowResult);

console.log("---- NEXT ----");

function mathematicalOperation(a, b, c, d) {
    let result = a * b / c - d;
    return result;
}
let resultOfAction = mathematicalOperation(4, 5, 2, 2);
console.log("Result of a mathematical operation: " + resultOfAction);   // 8

let resultOfAction2 = mathematicalOperation(12, 22, 8, 10);
console.log(resultOfAction2);       // 23

console.log("---- NEXT ----");

function getSomeNumber() {
    return 666;
}
console.log(getSomeNumber());