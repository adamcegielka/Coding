// Array splice()

const colours = ['white', 'black', 'green', 'yellow'];
colours.splice(2, 0, 'red');
console.log(colours); // (5) ['white', 'black', 'red', 'green', 'yellow']

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.splice(0, 0, 'Monday');
console.log(days);   // (5) ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const names1 = ['Adam', 'Ola', 'Luisa'];
names1.splice(0, 1, 'Ewa');
console.log(names1);  // (3) ['Ewa', 'Ola', 'Luisa']

const names2 = ['Adam', 'Jim', 'Ola', 'Ewa', 'Luisa', 'Tom', 'Jan'];
names2.splice(2, 3, 'John');
console.log(names2);  // (5) ['Adam', 'Jim', 'John', 'Tom', 'Jan']

const names3 = ['Adam', 'Jim', 'Ola', 'Ewa', 'Luisa', 'Tom', 'Jan'];
names3.splice(2, 3, 'John', 'Mark');
console.log(names3);  // (6) ['Adam', 'Jim', 'John', 'Mark', 'Tom', 'Jan']

const names4 = ['Adam', 'Jim', 'Ola', 'Ewa', 'Luisa', 'Tom', 'Jan'];
names4.splice(-3, 3);
console.log(names4);  // (4) ['Adam', 'Jim', 'Ola', 'Ewa']

// -------------------------------------------

function deleteElements(array, index, amount) {
    array.splice(index, amount);
    return array;
}

let numbers = [1, 2, 3, 4, 5];
let result = deleteElements(numbers, 2, 3);
console.log(result);  // (2) [1, 2]