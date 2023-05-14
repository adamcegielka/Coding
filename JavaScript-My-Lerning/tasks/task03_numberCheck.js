// Age verification programme

let age = 18;

if (age >= 18) {
    console.log('You can drink');
} else if (age == 17) {
    console.log('You have to wait another year');
} else if (age == 0) {
    console.log('You are not born yet!');
} else if (age < 0) {
    console.log('Enter correct age!')
} else {
    console.log('You are underage!');
}


// Age and weight verification

let years = 21;
let weight = 53;

if (years >= 21 && weight >= 53) {
    console.log("You can join");
} else if (years >= 21 && weight < 53) {
    console.log("You can't join because you don't weigh enough");
} else if (years < 21 && weight >= 53) {
    console.log("You can't join because you're not old enough");
} else {
    console.log("You can't join because you're too young and don't weigh enough");
}