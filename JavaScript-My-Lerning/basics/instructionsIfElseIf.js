// Conditional statements if, else if, else

// Not return the text
if (0) console.log("not return the text");      // 0 gives false
if (5 - 5) console.log("not return the text");  // because the result gives 0
if (false) console.log("not return the text");
if (true != true) console.log("not return the text");

// Return the text
if (-2) console.log("return the text");         // because it is not 0 and 0 gives false
if (5 - 4) console.log("return the text");
if (true) console.log("return the text");
if (true == true) console.log("return the text");

// new code
let x = 5;
let y = 9;

if (x < y) {
    console.log("It is: " + true);
}

// new code
let z = 7;

if (z >= 9) {
    console.log("It is true")
} else {
    console.log("It is false")      // this cod will be executed
}

// new code
let a = 17;
if (a == 18) {
    console.log("Ok");
} else if (a > 18) {
    console.log("OK");
} else {
    console.log("NO!");             // this cod will be executed
}

// new code
let b = 5;

if (b == 1) {
    console.log("b = ", b);
} else if (b == 2) {
    console.log("b = ", b);
} else if (b == 3) {
    console.log("b = ", b);
} else if (b == 4) {
    console.log("b = ", b);
} else if (b == 5) {
    console.log("b = ", b);           // this cod will be executed
} else {
    console.log("does not meet the conditions");
}
