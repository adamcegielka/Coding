// guess the number from 0 to 5

let correctNumber = 4;

switch (correctNumber) {
  case 0:
    console.log('invalid number');
    break;
  case 1:
    console.log('invalid number');
    break;
  case 2:
    console.log('invalid number');
    break;
  case 3:
    console.log('invalid number');
    break;
  case 4:
    console.log('you guessed it, it is a number:', correctNumber);
    break;
  case 5:
    console.log('invalid number');
    break;
  default:
    console.log('you specified a number outside the range');
}

// seasons

let month = 7;
let season = '';

switch (month) {
  case 3:
  case 4:
  case 5:
    season = 'spring';
    break;
  case 6:
  case 7:
  case 8:
    season = 'summer';
    break;
  case 9:
  case 10:
  case 11:
    season = 'autumn';
    break;
  case 12:
  case 1:
  case 2:
    season = 'winter';
    break;
  default:
    season = 'there is no such season';
}

console.log('Number of month ' + month + ' season ' + season);
