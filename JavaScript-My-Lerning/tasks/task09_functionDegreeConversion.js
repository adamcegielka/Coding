// Conversion of degrees celsius and fahrenheit

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + '\xB0 Celsius is ' + fahrenheit + '\xB0 Fahrenheit ');
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + '\xB0 Fahrenheit ' + celsius + '\xB0 Celsius');
  return celsius;
}

let f = celsiusToFahrenheit(20);
let c = fahrenheitToCelsius(86);
