// variables

let integer = 15;
let decimal = 21.102;
console.log(integer, "and", decimal);

let text = " Hello World!";
console.log("Text:" + text);

// multiline
let multiline = `line 1
        line 2
    line 3`;
console.log(multiline);

// boolean
let messageSentFlag = true;
console.log(messageSentFlag);

    if (messageSentFlag) {
    console.log("Value sent");
}

// tables

const cars = ["Audi", "BMW", "Opel", "Mercedes"];
console.log(cars);
console.log(cars.length); // shows how many values there are (4)
console.log(cars[0]);     // shows first value
console.log(cars[3]);     // shows fourth value