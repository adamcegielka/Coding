// Merging (Concatenating) Arrays

const men = ['Adam', 'Jhon', 'Jan', 'Piotr'];
const women = ['Ewa', 'Ola', 'Anna'];

const workers = men.concat(women);
console.log(workers);
// [object Array] (7) ["Adam","Jhon","Jan","Piotr","Ewa","Ola","Anna"]

// --------------------------------------

const arr1 = ['white', 'pink', 'grey'];
const arr2 = ['black', 'blue', 'red'];
const arr3 = ['yellow', 'green', 'brown'];

const colors = arr1.concat(arr2, arr3);
console.log(colors);
// [object Array] (9) ["white","pink","grey","black","blue","red","yellow","green","brown"]

const cars = ['Audi', 'Opel', 'Skoda'];

// --------------------------------------

console.log(cars.concat('BMW'));
// [object Array] (4) ["Audi","Opel","Skoda","BMW"]

// --------------------------------------

function tables(tab1, tab2) {
    let connectedTable = tab1.concat(tab2);

    return connectedTable;
}

let firstTab = [1, 2 , 3];
let secondTab = [4, 5, 6];
let result = tables(firstTab, secondTab);
console.log(result);
// [object Array] (6) [1,2,3,4,5,6]

// --------------------------------------

function createSchoolGroup(groupLetter, numGroups) {
    let schoolGroup = [];

    for (let i = 1; i <= numGroups; i++) {
        schoolGroup.push(i + groupLetter);
    }

    return schoolGroup;
}

let groupA = createSchoolGroup('a', 4);
let groupB = createSchoolGroup('b', 2);
let groupC = createSchoolGroup('c', 5);
console.log(groupA.concat(groupB, groupC));
// // [object Array] (11) ["1a","2a","3a","4a","1b","2b","1c","2c","3c","4c","5c"]