// INSTRUKCJE SKOKU

let box1 = document.getElementById("score1");
let box2 = document.getElementById("score2");

// continue

loop1:
for (let j = 0; j < 3; j++) {

    loop2:
    for (let i = 0; i < 10; i++) {
        box1.innerHTML += " - <br>";
        if (i > 5) {
            continue loop1;
        }
        if (i % 2 == 1) {
            continue;
        }
        box1.innerHTML += j + " - " + i + "<br>";
    }
}
    
// break

top:
for (let j = 0; j < 3; j++) {

    inner:
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            break top;
        }
        box2.innerHTML += j + " - " + i + "<br>";
    }
}

skip:
{
    alert("Warning!");
    break skip;
    alert("Skip!");
}