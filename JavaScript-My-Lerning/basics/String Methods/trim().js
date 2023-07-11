// String trim() - deletes white marks

let text1 = '   Hello World! \n   ';
console.log(text1.trim()); // Hello World!

// --------------------------------------

function removeUnnecessarySpaces(text) {
  let trimmedText = text.trim();
  console.log('Trimmed Text: ' + trimmedText);
}

let text = '   Example text   ';
removeUnnecessarySpaces(text);

// Trimmed Text: Example text
