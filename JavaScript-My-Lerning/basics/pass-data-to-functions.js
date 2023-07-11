// pass data to functions

let a = 4;
let b = 'books';
function passByValue(num, str) {
  num = num + 5;
  str = str + ' !';
  console.log('message: ' + num + ' ' + str);
}

passByValue(a, b);
