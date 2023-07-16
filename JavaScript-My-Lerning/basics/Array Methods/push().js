// Array push()

const names = ['Adam', 'Ewa', 'John', 'Ola'];
names.push('Mark');
console.log(names); // (5) ['Adam', 'Ewa', 'John', 'Ola', 'Mark']

// --------------------------------------

function addElement(arr, element) {
    arr.push(element);

    return arr;
}

let numbers = [1, 2, 3, 4, 5, 6,];
let newElement = 7;
let result = addElement(numbers, newElement);
console.log(result); // (7) [1, 2, 3, 4, 5, 6, 7]