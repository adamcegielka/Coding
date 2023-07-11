// search()

let someText = 'Lorem Ipsum is simply dummy text of the printing.';
console.log(someText.search('simply'));         // 15
console.log(someText.search(/is/));             // 12

// --------------------------------------

let regularExpression = /[A-Z]/g;       //  /g flag (global match):
let message = 'some Tekst';
console.log(message.search(regularExpression));       // 5

// --------------------------------------

function findIndex(text, searchText) {
    let index = text.search(searchText);
    console.log('Index of found text: ' + index);
}

let text = 'Lorem Ipsum is simply';
let searchText = 'simply';

findIndex(text, searchText);

// Index of found text: 15