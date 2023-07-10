// toUpperCase(), toLowerCase()
let text = 'Some Text'

console.log(text.toUpperCase());       // SOME TEXT
console.log(text.toLowerCase());       // some text

// --------------------------------------

function editText(fullName) {
    let textGreat = fullName.toUpperCase();
    let textSmall = fullName.toLowerCase();
  
    console.log("Text in capital letters: " + textGreat);
    console.log("Text in small letters: " + textSmall);
  }
  
  let firstLastName = "Birthe RECH";
  editText(firstLastName);
  
  // Text in capital letters:  BIRTHE RECH
  // Text in small letters: birthe rech