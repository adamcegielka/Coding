// Array shift() - Removing the first element from an array using the shift() method
// Array unshift() - Adding a new element to the beginning of the array using the unshift() method

const namesA = ['Ola', 'Nina', 'Anna', 'Ewa'];
let name1 = namesA.shift();
console.log(name1);  // Ola
console.log(namesA); // (3) ['Nina', 'Anna', 'Ewa']

// --------------------------------------

const namesB = ['Ola', 'Nina', 'Anna', 'Ewa'];
let name2 = namesB.unshift('Adam');
console.log(name2);  // 5
console.log(namesB); // (5) ['Adam', 'Ola', 'Nina', 'Anna', 'Ewa']

// --------------------------------------

function modifyArr (arr, newElement) {
    arr.shift();
    arr.unshift(newElement);

    return arr;
}

let numbers = [2, 3, 4, 5];
let newElement = 1;
let result = modifyArr(numbers, newElement);
console.log(result); // (4) [1, 3, 4, 5]

// --------------------------------------

const cars = ['Audi', 'Opel', 'Fiat', 'Skoda', 'Toyota', 'Mazda']

console.log('Fixed', cars.shift());
console.log('Fixed', cars.shift());
console.log('Fixed', cars.shift());

cars.push('BMW');
cars.push('VW');
cars.push('GMC');

cars.unshift('Mercedes');

console.log(cars);
// (7) ['Mercedes', 'Skoda', 'Toyota', 'Mazda', 'BMW', 'VW', 'GMC']