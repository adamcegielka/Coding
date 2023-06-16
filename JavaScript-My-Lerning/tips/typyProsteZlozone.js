// Typy proste i złożone

let variableName = 28;
variableName = "Some text";
variableName = true;
variableName = new VariableName();

// -------------------------------------------------

let anyNumber = 4;
typeof anyNumber;
// 'number'

let anyWord = "Some text"
typeof anyWord;
// 'string'

let logic = true;
typeof logic;
// 'boolean'

let some;
typeof some;
// 'undefined'

let sym = Symbol("Sth.");
typeof sym;
// 'symbol'

let bigint = 123456789n;
typeof bigint;
// 'bigint'

let objecT = new Object;
typeof objecT;
// 'object'

// -------------------------------------------------

// Typy proste - prymitywy
let number = 5;                         // typ liczbowy
let string = "Some text";               // typ string
let flag = false;                       // typ boolean
let el = null;                          // specjalny prymitiw, zmuenna nie ma wartości
let info;                               // domyślnie undefined
let mySymbol = Symbol("Sth.");           // symbol, dodany w ECMA2015
let bigInt = 1n;                        // bigint do przechowywania liczby większej niż Number.MAX_SAFE_INTEGER (2^53 - 1)

// Typy złożone
let obj = new Object();                 // obiekt
let arr = new Array("Adam", "Ewa");     // obiekt tablica
let dat = new Date();                   // obiekt Data
let err = new Error();                  // obiekt Error

// -------------------------------------------------

let longNumber = 12.3456789;
longNumber.toFixed(2);                  // skraca do 2 miejsc po przecinku = 12.35

// -------------------------------------------------

let data = {
    id: 2,
    name: "Adam",
    print: function () {
        console.log(this.id);
    }
}
data.print();           // 2

// -------------------------------------------------

let namber1 = 12.3456789;
let number2 = new Number(namber1);
number2.toFixed(1);     // 12.3

let number3 = 12.3456789;
number3.toFixed(2);     // 12.35