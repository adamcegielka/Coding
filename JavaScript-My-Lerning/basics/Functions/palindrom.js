function palindrom(text) {
    let reversedText = text.split('').reverse().join('');
    return text === reversedText
}

let example1 = 'kajak';
console.log(palindrom(example1)); // true

let example2 = 'hello';
console.log(palindrom(example2)); // false

// -------------------------------------------

function palindrom() {
    let text = prompt('Enter a word:');

    let reversedText = text.split('').reverse().join('');

    if (text === reversedText) {
        console.log('The word is a palindrome.');
    } else {
        console.log('The word is not a palindrome.');
    }
}

palindrom();