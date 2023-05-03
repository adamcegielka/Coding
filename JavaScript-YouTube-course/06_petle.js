//  PĘTLE

let box = document.getElementById("score");
let box1 = document.getElementById("score1");
let box2 = document.getElementById("score2");

// While

let i = 7; 

while (i < 7) {
    box.innerHTML += i + ", ";
    i++;
}


// Do While

let j = 7;

do {
    box1.innerHTML += j + ", ";
    j++;
} while (j < 7);


// For

let k = 7;

for (; k < 7; k++) {
    box2.innerHTML +=  k + ", ";
}

// for (let k = 7; k < 7; k++) {box2.innerHTML +=  k + ", ";}