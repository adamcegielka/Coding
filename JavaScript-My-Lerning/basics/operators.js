// Assignment

let x = 10;
x += 5;     // 15
x -= 3;     // 12
x *= 2;     // 24
x /= 3;     // 8
x %= 5;     // 3
x **= 3;    // 27

let y = 20;
y <<= 5;    // 640
y >>= 5;    // 20
y >>>= 2;   // 5

y &= 3      // 1
y ^= 4      // 5
y |= 2      // 7

// --------------------------------------
// Arithmetic

let a = 9;
let b = 3;

arit1 = a + b;  // 12  - Addition
arit2 = a - b;  // 6   - Subtraction
arit3 = a * b;  // 27  - Multiplication
arit3 = a ** b; // 729 - Exponentiation
arit4 = a / b;  // 3   - Division
arit5 = a % b;  // 0   - Modulus

a++  // increment
++a  // pre-increment

a--  // decrement
--a  // pre-decrement

// --------------------------------------
// Comparison

let c = 8;
let d = 5;
let e = 'yes';

c == d;     // false
c === d;    // false
c === e;    // false
c != d;     // true
c !== d;    // true
c !== e;    // true
c < d;      // false
c <= d;     // false
c > d;      // true
c >= d;     // true

// --------------------------------------
// Logical

let xx = 6;
let yy = 7;

if (xx && yy);     // and
if (xx || yy);     // or
if (!(xx > yy));   // not

// --------------------------------------

if (8 > 5) {
    console.log('big');
} else {
    console.log('small');
}  // big

// or
(8 > 5) ? console.log('big') : console.log('small');  // big

let data = (8 > 5) ? 'big' : 'small';
data   // 'big'

// --------------------------------------

for(let i = 0, j = 3; i < 8; i++, j+=2) {
    console.log('i:'+i + ' j:'+j);
}
/*
i:0 j:3
i:1 j:5
i:2 j:7
i:3 j:9
i:4 j:11
i:5 j:13
i:6 j:15
i:7 j:17
*/