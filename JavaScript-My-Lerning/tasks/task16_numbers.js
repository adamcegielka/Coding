let yourNumber = prompt('Enter your integer');
console.log(typeof yourNumber); // string

yourNumber = Number.parseInt(yourNumber);
console.log(typeof yourNumber); // number

function calculateSquareArea(side) {
  return side * side;
}

let squareArea = calculateSquareArea(yourNumber);
console.log(`Area: ${squareArea}`);

// ---------------------------------------------

let yourDecimalNumber = prompt('Enter decimal number');

yourDecimalNumber = Number.parseFloat(yourDecimalNumber);

function calculateSquareArea(side) {
  return side * side;
}

let squareArea1 = calculateSquareArea(yourDecimalNumber);
console.log(`Area: ${squareArea1}`);
console.log(`Area: ${squareArea1.toFixed(2)}`);
