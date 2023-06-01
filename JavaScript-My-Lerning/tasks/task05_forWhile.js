console.log('------ Monożenie liczby z tabeli *2 -----');

let x = [1, 2, 3, 4, 5, 6];
let i = 0;

while (i < x.length) {
    console.log(x[i] * 2);
    i++;
}

console.log('------ Wyświetlanie imion po kolei i odwrotnie -----');

let names = ['Adam', 'Ewa', 'Jan', 'Ela', 'Wojtek'];

for (let j = 0; j < names.length; j++) {
    console.log(names[j]);
}

for (let k = names.length - 1; k >= 0;  k--) {
    let backlist = names[k];
    console.log(backlist);
}

console.log('------ Sumowanie liczby w tabeli -----');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let y = 0; y < array.length; y++) {
    sum = sum + array[y];
}

console.log(sum);   // 55
