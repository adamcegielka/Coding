// join() Method

const names = ['Adam', 'Ewa', 'Piotr', 'Ola'];
console.log(names.join(' * ')); // "Adam * Ewa * Piotr * Ola"

// --------------------------------------

function connectElements(arr, separator) {
    let connectText = arr.join(separator);

    return connectText;
}

let words = ['Hello', 'World', 'in', 'JavaScrtipt'];
let separator = ' ';

let result = connectElements(words, separator);
console.log(result); // "Hello World in JavaScrtipt"

// --------------------------------------

const namesA = ['Jan', 'Anna', 'Natalis', 'Darek', 'Dawid'];

function allNames(listNames, sign) {
    const reverseNames = listNames.reverse();

    return reverseNames.join(sign);
}

const combineData = allNames(namesA, ' || ');
console.log(combineData);
// Dawid || Darek || Natalis || Anna || Jan

console.log(combineData.split(' || '));
// (5) ['Dawid', 'Darek', 'Natalis', 'Anna', 'Jan']