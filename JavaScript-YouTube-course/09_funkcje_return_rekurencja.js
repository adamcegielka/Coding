// FUNKCJE RETURN, REKURENCJA

let result = document.getElementById("score");

// return

function add(x, y) {
    return x + y;
    alert("Next...");   // everything after return will not work
}

let sum = add(3, 4);
result.innerHTML += "Total = " + sum + "<br>";
alert(add(19, 2));

// rekurencja (recursion) / silnia (factorial)

function factorial(z) {
    if (z == 1)
        return 1;
    else
        return z * factorial(z - 1);
}

result.innerHTML += "Factorial = " + factorial(4);  // 24