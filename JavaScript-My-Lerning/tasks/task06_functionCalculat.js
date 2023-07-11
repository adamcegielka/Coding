// Calculation of two values: weight and height

function calculateBmi(weigh, height) {
  let resultBmi = weigh / (height * height);
  return resultBmi;
}

const bmi = calculateBmi(81, 1.73);
console.log('Bmi value: ' + bmi); // 27.064051588760066
