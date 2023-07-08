// indexOf(), lastIndexOf()

let text = 'Lorem Ipsum is simply dummy text of the printing, is typesetting industry.';

let a = text.indexOf('is');
console.log(a);                 // 12

let b = text.indexOf('is', 13);
console.log(b);                 // 50

let c = text.indexOf('is', 51);
console.log(c);                 // -1

let d = text.lastIndexOf('of', 35);
console.log(d);                 // 33


// -------------------------------------------

function validateData(email) {
    const validateA = email.indexOf('a');
    const validateB = email.indexOf('@');
    const validateC = email.indexOf('.');

    return `
    Validate 'a': ${validateA}
    Validate '@': ${validateB}
    Validate '.': ${validateC}
    `
};

const validate1 = validateData('marco@example.com');
console.log(validate1);
// Validate 'a': 1
// Validate '@': 5
// Validate '.': 13

const validate2 = validateData('marco.com');
console.log(validate2);
// Validate 'a': 1
// Validate '@': -1
// Validate '.': 5

const validate3 = validateData('marco@examle');
console.log(validate3);
// Validate 'a': 1
// Validate '@': 5
// Validate '.': -1

// -----------------------------------------

function validateData1(email) {
    let validateMonky = email.indexOf('@');
    if (validateMonky < 0)
    return false;

    let validateDot = email.indexOf('.', validateMonky);
    if (validateDot == -1)
    return false;

    /*if (validateDot < validateMonky) {
        return false;       // dot before @
    }*/

    return true;
}

const email1 = 'marco@example.com';
console.log(email1, validateData1(email1));
// marco@example.com true

const email2 = 'marco@examle';
console.log(email2, validateData1(email2));
// marco@examle false

const email3 = 'marco.com';
console.log(email3, validateData1(email3));
// marco.com
