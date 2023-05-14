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