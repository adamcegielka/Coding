//  PĘTLE

let box = document.getElementById("score");
let box1 = document.getElementById("score1");
let box2 = document.getElementById("score2");

// While

let i = 0; 

while (i < 7) {
    box.innerHTML += i + ", <br>";
    i++;
}


// Do While

let j = 0;

do {
    box1.innerHTML += j + ", <br>";
    j++;
} while (j < 7);


// For

let k = 0;

// for (let k = 7; k < 7; k++) {box2.innerHTML +=  k + ", <br>";}

for (; k < 7; k++) {
    box2.innerHTML +=  k + ", <br>";
}
