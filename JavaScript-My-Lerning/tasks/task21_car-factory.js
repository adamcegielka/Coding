// car factory

let soldCars = 1200;
let carPrice = 90000;

let revenue = soldCars * carPrice;
console.log("Revenue: " + revenue); // 108000000

let factoryCostsPercentage = 65;
let factoryCosts = revenue * (factoryCostsPercentage / 100);
// let factoryCosts = revenue * 0.65;
console.log("Factory Costs: " + factoryCosts); // 70200000


let marketingCostsPercentage = 10;
let marketingCosts = revenue * (marketingCostsPercentage / 100);
// let marketingCosts = revenue * 0.1;
console.log("Marketing Costs: " + marketingCosts); // 10800000

let income = revenue - (factoryCosts + marketingCosts);
console.log("Income: " + income); // 27000000

let incomeTaxRate = 19;
let incomeTax = income * (incomeTaxRate / 100);
// let incomeTax = income * 0.19;
console.log("Income Tax: " + incomeTax); // 5130000

let incomeAfterTax = income - incomeTax;
console.log("Income After Tax: " + incomeAfterTax); // 21870000

let totalShares = 30000;
let earningsPerShare = incomeAfterTax / totalShares;
console.log("Earnings Per Share: " + earningsPerShare); // 729