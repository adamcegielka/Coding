// bank account

let balance = 3500;

let newSalary = balance += 5000;
let bonys = balance *= 2;
let bonusTaken = balance /= 2;
let costApartment = balance -= 2100;
let food = balance -= 1800;

console.log(balance); // 4600

// --------------------------------------

function performOperations(initialBalance) {
    let balance = initialBalance;
  
    balance += 5000;
    balance *= 2;
    balance /= 2;
    balance -= 2100;
    balance -= 1800;
  
    return balance;
  }
  
  let startingBalance = 3500;
  let finalBalance = performOperations(startingBalance);
  console.log(finalBalance); // 4600