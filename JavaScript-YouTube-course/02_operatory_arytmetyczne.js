// operatory matematyczne

var number = 8;

console.log(number + number);   // wynik 16
console.log(number + 7);        // wynik 15
console.log(number - 2);        // wynik 6
console.log(number * 3);        // wynik 24
console.log(number / 3);        // wynik 2.6666666666666
console.log(number % 5);        // wynik 3 -> 5 w 8 mieści się raz, zostaje 3

console.log("4" + 3);   // wynik 43 -> operator dodawania stringu tylko łączy (konkatenacja - łączenie ze sobą wyrażeń)
console.log("4" - 3);   // wynik 1
console.log("4" * 3);   // wynik 12
console.log("4" * "5"); // wynik 20
console.log("4" / 3);   // wynik 1.3333333333333
console.log("4" % 3);   // wynik 1

// reguły działania matematycznego
console.log(3 + 2 * 5);     // wynik 13
console.log((3 + 2) * 5);   // wynik 25

// skrócone operatory matematyczne
console.log("number = " + number); // wynik 8

number += 7;                       // 8 + 7
console.log("number = " + number); // wynik 15

number -= 6;                       // 15 - 6
console.log("number = " + number); // wynik 9

number /= 3;                       // 9 / 3
console.log("number = " + number); // wynik 3

number %= 2;                       // 3 % 2
console.log("number = " + number); // wynik 1


// dodawania wartości o jeden -> postinkrementacja - wykonuje sie później
var i = 1;
i++;
console.log("i = " + i);                // wynik 2

// odejmowanie wartości o jeden -> postdekrementacja - wykonuje sie później
i--;
console.log("i = " + i);                // wynik 1

// dodawania wartości o jeden -> preinkrementacja - wykonuje sie przed
var newValue = ++i;
console.log("newValue = " + newValue);  // wynik 2

// odejmowanie wartości o jeden -> predekrementacja - wykonuje sie przed
var newValue = --i;
console.log("newValue = " + newValue);  // wynik 1
