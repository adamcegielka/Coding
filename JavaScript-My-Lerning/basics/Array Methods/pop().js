// Array pop()

const names = ['Adam', 'Ewa', 'John', 'Ola'];
names.pop();
console.log(names); // (3) ['Adam', 'Ewa', 'John']

// --------------------------------------

function removeLastElement(arr, element) {
    arr.pop(element);

    return arr;
}

let numbers = [1, 2, 3, 4, 5, 6,];
let lastElement = 7;
let result = removeLastElement(numbers, lastElement);
console.log(result); // (5) [1, 2, 3, 4, 5]