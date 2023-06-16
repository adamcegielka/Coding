// Finding Larger Number 

function findLargest(number1, number2) {
    if (number1 > number2) {
        console.log("number1 is a larger number: " + number1);
        return number1;
    } else if (number2 > number1) {
        console.log("number2 is a larger number: " + number2);
        return number2;     
    } else {
        console.log("number1 equals number2: " + number1);
        return number1;
    }
}

let value1 = findLargest(3, 10);
console.log("Returned value value1: " + value1);

let value2 = findLargest(12, 7);
console.log("Returned value value2: " + value2);