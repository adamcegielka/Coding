// Object references

let box = {
  count: '12',
  car: 'audi',
};

let number = box;
let brand1 = box;
let brand2 = box;
number.count = 45;
brand1.car = 'bmw';
brand2.car = brand2.car.toUpperCase(); // BMW

box; // {count: 45, car: 'audi'}
