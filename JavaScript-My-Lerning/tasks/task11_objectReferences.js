// Object references

let car1 = {
  brand: 'Mercedes',
  name: 'EQE SUV',
  year: 2022,
};

let car2 = car1;
car2 = car2.brand; // 'Mercedes'
console.log(car2.name); // 'EQE SUV'

// adding to the object:

car2.topSpeed = 290;
console.log(car2); // {brand: 'Mercedes', name: 'EQE SUV', year: 2022, topSpeed: 290}
