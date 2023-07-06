// All Star Code Challenge #18

/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
*/

function strCount(str, letter) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
  
    return count;
  }

  module.exports = strCount;
  

// Sample Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});


/*
function strCount(str, letter) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(strCount("Hello", "o"));  // Output: 1
  console.log(strCount("Hello", "l"));  // Output: 2
  console.log(strCount("", "z"));       // Output: 0
*/