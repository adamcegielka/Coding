// Type Conversion

if( true ) console.log('ok'); // ok
if( '10' == 10 ) console.log('ok'); //ok
if( '10' === 10 ) console.log('ok'); // undefined
if( '10' === String(10) ) console.log('ok'); // ok
if( '10' === 1 + '0' ) console.log('ok'); // ok
if( '20' - 5 === 15 ) console.log('ok'); // ok

Number('12') // 12
Number('12.2545224') // 12.2545224
Number('12.2545224dgfgfy') // NaN

parseFloat('12.2545224dgfgfy') // 12.2545224
parseInt('12545224dgfgfy') // 12545224

Boolean(); // false
Boolean(-0); // false
Boolean(""); // false
Boolean("null"); // false
Boolean("undefined"); // false
Boolean(1); // true
Boolean(-1); // true
Boolean(0.001); // true
Boolean({}); // true
Boolean([]); // true
Boolean('0'); // true
Boolean('-0'); // true
Boolean('true'); // true
Boolean('false'); // true

if(0) console.log('ok'); // undefined
if(null) console.log('ok'); // undefined
if(' ') console.log('ok'); // true

true // true
!true // false
!!true // true

[1, 2, 3, 4, 5, 'a'] // (6) [1, 2, 3, 4, 5, 'a']
[1, 2, 3, 4, 5, 'a'].toString(); // '1,2,3,4,5,a'
[1, 2, 3, 4, 5, 'a'].join(); // '1,2,3,4,5,a'
[1, 2, 3, 4, 5, 'a'].join('-'); // '1-2-3-4-5-a'

Math.floor(12); // 12
Math.floor(12.6); // 12
Math.floor(-12.6); // -13

Math.ceil(12.6); // 13
Math.ceil(-12.6); // -12

Math.round(12.6); // 13
Math.round(12.4); // 12
Math.round(12.5); // 13
Math.round(-12.6); // -13

Math.trunc(12.6454663); // 12

parseInt('1254858gdggg'); // 1254858
parseInt('12548.58gdggg'); // 12548

parseFloat('12548.58gdggg'); // 12548.58
