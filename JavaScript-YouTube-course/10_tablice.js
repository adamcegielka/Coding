// TABLICE

let result = document.getElementById("score");

// First way
result.innerHTML += "---------- First way ---------<br>";

let arrayNames = new Array("Adam", "Ewa", "Jan", "Ola");
result.innerHTML += arrayNames[1] + "<br>";      // Ewa
result.innerHTML += arrayNames[3] + "<br>";      // Ola
result.innerHTML += arrayNames[4] + "<br>";      // undefined

// modification
arrayNames[4] = "Darek";
result.innerHTML += arrayNames[4] + "<br>";      // Darek
arrayNames[0] = "Adi";
result.innerHTML += arrayNames[0] + "<br>";      // Adi
arrayNames[9] = "Annia";
result.innerHTML += "Array length: " + arrayNames.length + "<br>";  // 10
    // ['Adi', 'Ewa', 'Jan', 'Ola', 'Darek', empty × 4, 'Annia']

console.log(arrayNames);


result.innerHTML += "-------------------<br>";

// displaying the whole array

for (let i = 0; i < arrayNames.length; i++) {
    result.innerHTML += arrayNames[i] + "<br>";
}

// or in console

arrayNames.forEach( x => console.log(x));


// Second way
result.innerHTML += "---------- Second way ---------<br>";

let arrayAges = new Array(5);
arrayAges[0] = 18;
arrayAges[1] = 25;
arrayAges[2] = true;
arrayAges[3] = 15;
arrayAges[4] = "seventeen";

console.log(arrayAges);
// (5) [18, 25, true, 15, 'seventeen']


// Third way
result.innerHTML += "---------- Third way ---------<br>";

let arrayCars = ["BMW", "Porsche", "Audi", "Skoda"];
console.log(arrayCars);
// (4) ['BMW', 'Porsche', 'Audi', 'Skoda']


// Prototypical function
result.innerHTML += "---------- Prototypical function ---------<br>";

let arrayPrototyp = (arrayNames.concat(arrayAges)).concat(arrayCars);
console.log(arrayPrototyp);
// (19) ['Adi', 'Ewa', 'Jan', 'Ola', 'Darek', empty × 4, 'Annia', 18, 25, true, 15, 'seventeen', 'BMW', 'Porsche', 'Audi', 'Skoda']