// Functions

function nameFunction1(x, y, z) {
    return x + y * z
}

let values1 = nameFunction1(2, 3, 5);
console.log(values1); // 17

// -------------------------------------------

function nameFunction2(x, y, z) {
    let result = x + y * z;
    return result;
}

let values2 = nameFunction2(2, 3, 5);
console.log(values2); // 17

// -------------------------------------------

function calculateSum(a,b) {
    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;

    return {
        addition: add,
        subtraction: sub,
        multiplication: mul,
        division: div
    };
}

let mathResult = calculateSum(10, 4);
console.log(mathResult.addition);       // 14
console.log(mathResult.subtraction);    // 6
console.log(mathResult.multiplication); // 40
console.log(mathResult.division);       // 2.5
