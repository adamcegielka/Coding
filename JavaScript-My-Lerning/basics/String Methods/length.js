// String Length

let someText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(someText.length); // 26

let lengthText = someText.length;
console.log(lengthText); // 26

// --------------------------------------

function calculateLength(text) {
    let long = text.length;
    console.log('Text length: ' + long);
}

let sameText = 'Lorem Ipsum is simply dummy text of the printing, is typesetting industry.';
calculateLength(sameText);

// Text length: 74