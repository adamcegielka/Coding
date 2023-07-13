// String replace()

let sameText = 'Lorem MuspI is easy dummy text';
let newText1 = sameText.replace('easy', 'simply');
let newText2 = newText1.replace(/MuspI/i, 'Ipsum');
let newText3 = newText2.replace(/[A-Z]/g, 'A');
console.log(newText1);      // Lorem MuspI is simply dummy text
console.log(newText2);      // Lorem Ipsum is simply dummy text
console.log(newText3);      // Aorem Apsum is simply dummy text

// --------------------------------------

function replaceText(text, oldText, newText) {
    let newReplaceText = text.replace(oldText, newText);
    console.log('New text: ' +  newReplaceText);
}

let text = 'Lorem Ipsum is easy dummy text';
let oldText = 'easy';
let newText = 'simply';

replaceText(text, oldText, newText);
// New text: Lorem Ipsum is simply dummy text

// --------------------------------------

// String replaceAll()

let sentence = 'I like coffee. Drinking coffee gives you energy'
let newSentence = sentence.replaceAll('coffee', 'Coffee');
console.log(newSentence);  // I like Coffee. Drinking Coffee gives you energy
// same effect with:
let newSentence1 = sentence.replace(/coffee/g, 'Coffee');
console.log(newSentence1); // I like Coffee. Drinking Coffee gives you energy