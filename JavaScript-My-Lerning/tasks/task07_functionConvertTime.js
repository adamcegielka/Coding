// Creation of a function to convert time

function convertToSeconds(hours, minutes) {
  return minutes * 60 + hours * 60 * 60;
}

function convertToHours(minutes) {
  return minutes / 60;
}

let seconds = convertToSeconds(3, 25);
console.log('Seconds: ' + seconds); // 12300

let hours = convertToHours(120);
console.log('Hours: ' + hours); // 2
