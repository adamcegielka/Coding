// FUNKCJE  f(x)

let result = document.getElementById("score");

function functionName () {
    alert("Hello!");
}

functionName();
functionName();

// Funkcja z argumentem

add(7, 4);
add(11, 19);
add(8);

function add(x, y) {
    if (typeof(y) === "undefined") {
        y = 1;
    }
    result.innerHTML += x + " + " + y + " = " + (x + y) + "<br>";
}

/*
add(11, 19, 5);

result.innerHTML += x + " + " + y + " + " + arguments[2] +  " = " + (x + y) + "<br>";
*/