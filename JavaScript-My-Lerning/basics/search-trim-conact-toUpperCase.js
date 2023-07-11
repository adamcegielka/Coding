// search()
let regularExpression = /[A-Z]/g; //  /g flag (global match):
let message = 'some Tekst';
console.log(message.search(regularExpression)); // 5

// --------------------------------------

// trim() - deletes white marks
let text0 = '   Hello World! \n  ';
console.log(text0.trim());

// --------------------------------------

// toUpperCase(), toLowerCase()
let text1 = 'Some Text';
console.log(text1.toUpperCase()); // SOME TEXT

let text2 = 'Some Text';
console.log(text2.toLowerCase()); // some text

// --------------------------------------

// concat()
let x = 'something1';
let y = x.concat(' something2');
console.log(x); // something1
console.log(y); // something1 something2

let z = y.concat(' something3').concat(' something4');
console.log(z); // something1 something2 something3 something4

let q = z;
console.log(q.concat(' something5').concat(' something6'));
// something1 something2 something3 something4 something5 something6

// --------------------------------------

function gerUserInformation(name, surname, job) {
  name = name.toLowerCase().trim();
  surname = surname.toUpperCase().trim();
  job = job.trim();

  let newUser = `
    Name: ${name}
    Surname: ${surname}
    Job: ${job}
    `;
  newUser = newUser.concat(`All: ${name} ${surname} - ${job}`);

  return newUser;
}

let newUser1 = gerUserInformation('Jhon', 'Smith', 'Tester');
console.log(newUser1);

console.log(gerUserInformation('Eve', 'Fox', 'HR'));

/*
    Name: jhon
    Surname: SMITH
    Job: Tester
    All: jhon SMITH - Tester
*/

/*
    Name: eve
    Surname: FOX
    Job: HR
    All: eve FOX - HR
*/
