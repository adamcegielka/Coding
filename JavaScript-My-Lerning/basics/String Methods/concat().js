// String concat()

let x = 'something1';
let y = x.concat(' something2');
console.log(x); // something1
console.log(y); // something1 something2

let z = y.concat(' something3').concat(' something4');
console.log(z); // something1 something2 something3 something4

let q = z;
console.log(q.concat(' something5').concat(' something6'));
// something1 something2 something3 something4 something5 something6

// --------------------------------------

function combineTexts(text1, text2, text3) {
  let sentence = text1.concat(text2).concat(text3);
  console.log('Combined text: ' + sentence);
}

let text1 = 'Hello ';
let text2 = 'World';
let text3 = '!';
combineTexts(text1, text2, text3);

// Combined text: Hello World!
