// String split()

let names = 'Adam, Ewa | Anna, Ola';
let commas = names.split(',');
let spaces = names.split(' ');
let pipe = names.split('|');
console.log('Split on commas: ' + commas);    // Split on commas: Adam, Ewa | Anna, Ola
console.log('Split on commas: ', commas);     // Split on commas:  (3) ['Adam', ' Ewa | Anna', ' Ola']
console.log('Split on commas: ' + commas[2]); // Split on commas: Ola
console.log('Split on commas: ', commas[2]);  // Split on commas:  Ola
console.log('Split on spaces: ' + spaces);    // Split on spaces: Adam,,Ewa,|,Anna,,Ola
console.log('Split on spaces: ', spaces);     // Split on spaces:  (5) ['Adam,', 'Ewa', '|', 'Anna,', 'Ola']
console.log('Split on spaces: ' + spaces[3]); // Split on spaces: Anna,
console.log('Split on spaces: ', spaces[3]);  // Split on spaces:  Anna,
console.log('Split on pipe: ' + pipe);        // Split on pipe: Adam, Ewa , Anna, Ola
console.log('Split on pipe: ', pipe);         // Split on pipe:  (2) ['Adam, Ewa ', ' Anna, Ola']

// --------------------------------------

function splitText(text, separator) {
    let dividedText = text.split(separator);
    console.log('Divided Text: ', dividedText);
}

let text = 'Smith|1999|USA';
let separator = '|';
splitText(text, separator);

// Divided Text:  (3) ['Smith', '1999', 'USA']     - with: console.log('Divided Text: ', dividedText);
// Divided Text: Smith,1999,USA                    - with: console.log('Divided Text: ' + dividedText);