// String substring()

let names = 'Adam, Ewa, Anna';
let lastName = names.substring(11);
let secondName = names.substring(6, 9);
console.log('Last name is: ' + lastName); // Last name is: Anna
console.log('Second name is: ' + secondName); // Second name is: Ewa

// --------------------------------------

function cutText(text, start, end) {
  let cutText = text.substring(start, end);
  console.log('Cut text: ' + cutText);
}

let text = 'Example text to be cut out';
let start = 13;
let end = 19;

cutText(text, start, end);

// Cut text: to be
