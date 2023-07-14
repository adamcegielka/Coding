// Array
// https://www.w3schools.com/js/js_arrays.asp

let names = ['Adam', 'Ewa', 'Ola'];
console.log(names);     // (3) ['Adam', 'Ewa', 'Ola']
console.log(names[1]);  // Ewa

let months = [];
months[0] = 'January';
months[1] = 'February';
months[2] = 'March';
months.push('December'); // push() - add to the end of the table
console.log(months);     // (4) ['January', 'February', 'March', 'December']
console.log(months[0]);  // January

let days = [1, 2 ,3, 4, 'Friday'];
console.log(days);      // (5) [1, 2, 3, 4, 'Friday']
console.log(days[4]);   // Friday

let years = [2020, 2021, 2022, ['January', 'February']];
console.log(years);     // (4) [2020, 2021, 2022, Array(2)]

const changeElement = ['Audi', 'BMW', 'Opel'];
changeElement[2] = 'VW';
console.log(changeElement); // (3) ['Audi', 'BMW', 'VW']

let cars = new Array('Audi', 'BMW', 'Opel');
console.log(cars);      // (3) ['Audi', 'BMW', 'Opel']

// attention
let oneNumber1 = new Array(4);
console.log(oneNumber1); // (4) [empty × 4]

let oneNumber2 = Array.of(4);
console.log(oneNumber2); // [4]

// Array().fill()
let x = Array(5).fill('Love!');
console.log(x)      // (5) ['Love!', 'Love!', 'Love!', 'Love!', 'Love!']

// revers()
let y = Array(1, 2, 3, 4, 5);
let rever = y.reverse();
console.log(rever); // (5) [5, 4, 3, 2, 1]
console.log(y);     // (5) [5, 4, 3, 2, 1]

// pop()
let firstNames = Array.of('Adam', 'Ewa');
let lastElement = firstNames.pop();
console.log(lastElement);       // Ewa
console.log(firstNames);        // ['Adam']
console.log(firstNames.length); // 1

// concat()
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = ['numbers'];
let d = a.concat(b, c, [7, 'next', [8, 9]]);
console.log(d);     // (10) [1, 2, 3, 4, 5, 6, 'numbers', 7, 'next', Array(2)]

// join()
let z = [1, 2, 3, 4];
let connect1 = z.join();
let connect2 = z.join('|');
console.log(connect1);   // '1,2,3,4'
console.log(connect2);   // '1|2|3|4'

// shift()
let xxx = ['one', 'two', 'three', 'four']
let yyy = xxx.shift();
console.log(yyy);   // one
console.log(xxx);   // (3) ['two', 'three', 'four']

// unshift()
let zzz = ['one']
let AddTozzz = zzz.unshift('two', 'three', 'four');
console.log(zzz);   // (4) ['two', 'three', 'four', 'one']

// --------------------------------------

let example = [3, 'text', 8, 'sum'];

for(let i = 0; i < example.length; i++) {
    let effect = example[i];
    console.log(effect);
}
/*
3
text
8
sum
*/

// --------------------------------------

let colors = ['red', 'blu', 'back'];

colors.forEach(function(item, index, array) {
    console.log(index, item, array);
});
/*
0 'red' (3) ['red', 'blu', 'back']
1 'blu' (3) ['red', 'blu', 'back']
2 'back' (3) ['red', 'blu', 'back']
*/

// --------------------------------------

function calculateSum(board) {
    let sum = 0;

    for(let i = 0; i < board.length; i++) {
        sum += board[i];
    }

    return sum;
}

let numbers = [1, 2, 3, 4, 5];
let result = calculateSum(numbers);
console.log(result);    // 15