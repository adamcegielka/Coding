typeof 12;                  // number
typeof "tekst";             // string
typeof "13";                // string
typeof true;                // boolean
typeof { data: 4 };         // object
typeof undefined;           // undefined
typeof 1n;                  // bigint
typeof Symbol();            // symbol
typeof function() {};       // function
typeof [];                  // object

typeof null                 // object - exception (error)


// example:

let data = 18;
function info(x) {
    if(typeof x == "number") {
        console.log("It is number " + x);
    }
    if(typeof x == "string") {
        console.log("It is string " + x);
    }
    if(typeof x == "object") {
        console.log("It is object " + x);
    }
};

info(data);