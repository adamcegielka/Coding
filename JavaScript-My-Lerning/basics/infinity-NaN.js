// Infinity, NaN

Number.MIN_SAFE_INTEGER;    // -9007199254740991
Number.MAX_SAFE_INTEGER;    // 9007199254740991 : 2^53-1

Number.isSafeInteger(Math.pow(2,53) - 1);       true
Number.isSafeInteger(Math.pow(2,53));           false


// NaN:
parseInt('Hi');
Math.sqrt(-3);
0 / 0;

isNaN(Number.NaN);  // true
isNaN(NaN);         // true
isNaN(12);          // false
// isNaN() - not use: NaN or != NaN


// Infinity:
let x = 1 / 0;          // Infinity
let y = -1 / 0;         // -Infinity

Number.isFinite(12);    // true
Number.isFinite(1/0);   // false

Number.MAX_VALUE;       // 1.7976931348623157e+308
Number.MIN_VALUE;       // 5e-324

Number.isNaN(NaN);      // true

Number.parseFloat("4.342abcde");    // 4.342
Number.parseInt("12345");           // 12345
Number.parseInt("12345abc");        // 12345

Number.isInteger(8 / 4);            // true
Number.isInteger(8 / 2);            // true
Number.isInteger(8 / 3);            // false


let z = 2.05 * 100;
console.log(z);         // 204.99999999999997

z.toFixed();            // 205

1.25945.toFixed(2);                 // 1.26

Math.round(2.05 * 100); // 205
Math.round(124.5678);   // 125