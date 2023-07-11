// Numbers

let x = 6;
console.log(x); // 6

x = 2.35;
console.log(x); // 2.35

x = 0xf;
console.log(x); // 15

x = 0x435;
console.log(x); // 1075

x = 0.45;
console.log(x); // 0.45

Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_SAFE_INTEGER; // 9007199254740991 : 2^53-1

Math.pow(2, 53) - 1; // 9007199254740991 : 2^53-1

Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(Math.pow(2, 53)); // false

Number.parseFloat('4.342abcde'); // 4.342
parseFloat('4.342abcde'); // 4.342

Math.sqrt(25); // 5
Math.sqrt(-25); // NaN

isNaN(0 / 0); // true
isNaN(0); // false
