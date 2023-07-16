function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minValue = 1;
let maxValue = 10;
let drawnNumber = randomNumber(minValue, maxValue);
console.log(drawnNumber);