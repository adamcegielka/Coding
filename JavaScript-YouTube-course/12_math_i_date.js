// MATH I DATE

let resultMath = document.getElementById("math");
let resultDate = document.getElementById("date");
let clock1 = document.getElementById("closk1");
let clock2 = document.getElementById("clock2");

// Math

let number = prompt("Enter a number: ", "0");

resultMath.innerHTML += "Number: " + number + "<br>";
resultMath.innerHTML += "Abs: " + Math.abs(number) + "<br>";            // Math.abs() zwraca liczba bezwzględna
resultMath.innerHTML += "Round: " + Math.round(number) + "<br>";        // Math.round() zwraca wartość liczby zaokrąglonej do najbliższej liczby całkowitej.
resultMath.innerHTML += "Ceil: " + Math.ceil(number) + "<br>";          // Math.ceil() zwraca liczbę całkowitą, zaokrągloną w górę, która jest większa lub równa argumentowi
resultMath.innerHTML += "Floor: " + Math.floor(number) + "<br>";        // Math.floor() zawsze zaokrągla w dół i zwraca największą liczbę całkowitą mniejszą lub równą danej liczbie
resultMath.innerHTML += "Power: " + Math.pow(number, 3) + "<br>";       // Math.pow() służy do obliczania potęgi liczb zarówno całkowitych jak i podwójnych
resultMath.innerHTML += "Sqrt: " + Math.sqrt(number) + "<br>";          // Math.sqrt() zwraca pierwiastek kwadratowy z liczby

resultMath.innerHTML += "PI: " + Math.PI + "<br>";                                          // Math.PI() zwraca wartość PI
resultMath.innerHTML += "PI round: " + (Math.round(Math.PI * 100) / 100) + "<br>";          // zaokrąglenie
resultMath.innerHTML += "Random: " + Math.random() + "<br>";                                // Math.random() zwraca wartość losową
resultMath.innerHTML += "Random floor: " + (Math.floor(Math.random() * 10) + 1) + "<br>";   // zaokrąglenie


// Date

resultDate.innerHTML += "Current: " + Date() + "<br>";                  // aktualna data

let dateNumerOne = new Date(3000);
resultDate.innerHTML += "Date One: " + dateNumerOne + "<br>";           // Thu Jan 01 1970 01:00:03

let dateNumerTwo = new Date(1981, 11, 28, 4, 23, 45);
resultDate.innerHTML += "Date One: " + dateNumerTwo + "<br>";           // Mon Dec 28 1981 04:23:45
resultDate.innerHTML += "Date One: " + dateNumerTwo.getDate() + "." + (dateNumerTwo.getMonth() + 1) + "." + dateNumerTwo.getFullYear() + "<br>";      // 28.12.1981
