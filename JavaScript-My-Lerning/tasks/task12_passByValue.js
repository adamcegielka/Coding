// Pass by value

let payout = 2120;

function increaseSalary(mony, bonus) {
  mony = mony;
  bonus = mony * 0.2;
  total = mony + mony * 0.2;
  console.log('Mony: ' + mony + ' and bous: ' + bonus + ' Sum: ' + total);
}

increaseSalary(payout);
// Mony: 2120 and bous: 424 Sum: 2544

function newIncreaseSalary(mony, bonus) {
  mony = mony + mony * 0.2;
  return mony + bonus;
}

let salary = 4400;
let newSalary = newIncreaseSalary(salary, 1500);

console.log('Salary: ' + salary);
console.log('New salary: ' + newSalary);

// Salary: 4400
// New salary: 6780
