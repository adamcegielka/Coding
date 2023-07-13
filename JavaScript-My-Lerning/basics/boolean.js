// Boolean

let flag1 = true;
if(flag1 === true) {
    console.log('Is true');
}
if(flag1) {
    console.log('Is true');
}

// Everything Without a "Value" is False

let a = 0;
Boolean(a); // false

let b = -0;
Boolean(b); // false

let c = 0n;
Boolean(c); // false

let d = '';
Boolean(d); // false

let e;
Boolean(e); // false

let f = false;
Boolean(f); // false

let g = null;
Boolean(g); // false

let h = NaN;
Boolean(h); // false

let i = undefined;
Boolean(i); // false

let j = 8 / 'Text';
Boolean(j); // false

// Booleans as Objects

let x = false;
let y = new Boolean(false);
let z = (x == y);
console.log(z); // true

let xx = false;
let yy = new Boolean(false);
let zz = (xx === yy);
console.log(zz); // false

let xxx = new Boolean(false);
console.log(xxx); // Boolean {false}

let yyy = new Number(0);
console.log(yyy); // Number {0}

let zzz = new String('');
console.log(zzz); // String {''}