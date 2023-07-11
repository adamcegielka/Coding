// Creation of the makCar function => Nested objects

function makeCar(model, color, topSpeed) {
  return {
    nameModel: model,
    nameColor: color,
    numberTopSpeed: topSpeed,
    manufacturer: {
      name: 'Audi',
      cauntry: 'Germany',
      address: {
        street: 'Street Name',
        number: '66',
      },
    },
  };
}

let car1 = makeCar('Q7', 'Black', 290);
let car2 = makeCar('A8', 'Gray', 320);

console.log(car1);
console.log(car1);
