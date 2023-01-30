// INSTRUKCJE WARUNKOWE

console.log("Instrukcje warunkowe:");

// document.getElementById("score").innerHTML = "Hello World!";

var score = document.getElementById("score");

// Pierwszy przykład:

var valueOne = 4,
  valueTwo = 11;

/*
if (valueOne < valueTwo) {
  score.innerHTML = "True";
}
*/

// Drugi przykład:

var valueAge = 18;

/*
if (valueAge > 17) {
  score.innerHTML = "Możesz prowadzić auto";
} else {
  if (valueAge == 17) {
    score.innerHTML = "Możesz prowadzić pod opieką dorosłego!";
  } else {
    score.innerHTML = "Jesteś niepełnoletni!";
  }
}
*/

// można go uprościć:

if (valueAge > 17) {
  score.innerHTML = "Możesz prowadzić auto";
} else if (valueAge == 17) {
  score.innerHTML = "Możesz prowadzić pod opieką dorosłego!";
} else {
  score.innerHTML = "Jesteś niepełnoletni!";
}

// Alert:

if (true) {
  alert("Hello!");
  alert("How old are you?");
}

// Druga opcja:

valueAge >= 18 ? alert("Pełnoletni") : alert("Niepełnoletni!");
