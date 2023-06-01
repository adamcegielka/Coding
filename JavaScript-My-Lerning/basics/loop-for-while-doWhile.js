// Pętle for, while, do while 

// for - pętla od 0 do 10
console.log('Pętla for:');

for (let i = 0; i < 10; i++) {
    console.log("I'm learning JS");
}

console.log('-----------');

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum +=i;
}
console.log(sum);   // 45


// while
console.log('Pętla while:');

let x = 1;
while (x <= 10) {
    console.log("I will ...");
    x++;
}

console.log('-----------');

let y = 0; 
while (y < 0.5) {
    console.log(y);
    y = Math.random();
}
console.log(y);

console.log('-----------');

let a = -1;
while (a <= 3 ) {
    console.log("while and a: " + a);
    a = a + 1;
}


// do while
console.log('Pętla do while:');

let b = 0;
do {
    console.log("do while and b: ", b);
    b++;
} while (b < 5);