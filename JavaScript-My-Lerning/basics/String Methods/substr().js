// String substr()

let names = 'Adam, Ewa, Anna, Ola';
let lastName = names.substr(11);
let nextNames = names.substr(6, 9);
console.log('Lasts name is: ' + lastName); // Lasts name is: Anna, Ola
console.log('Next names are: ' + nextNames); // Second name is: Ewa, Anna

// --------------------------------------

let number = '012345678';
let example1 = number.substr(3);
let example2 = number.substr(3, 3);
console.log(example1);  // 345678
console.log(example2);  // 345

// --------------------------------------

function extractText(text, start, lengths) {
    let cutText = text.substr(start, lengths);
    console.log('Excised text: ' + cutText);
}

let text = 'Example text to be cut out';
let start = 13;
let lengths = 5;

extractText(text, start, lengths)

// Excised text: to be