// mutowalnosć

let a = "hello";
let b = a.toUpperCase();
console.log(b);     // HELLO
console.log(a);     // hello

let c = a + ", how are you?";
console.log(c);     // hello how are you?

a = a + ", how are you?";
console.log(a);     // hello how are you?

// -------------------------------------------------

let d = "Mutability";
console.log(d[1]);  // u

let e = d.toLowerCase();
console.log(e);     // mutability  
console.log(d);     // Mutability

// -------------------------------------------------

let i = 8;
i++;
console.log(i);     // 9