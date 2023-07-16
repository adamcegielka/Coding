function generateNumArry (long1) {
    let set1 = [];
    for (let i = 0; i < long1; i++) {
        set1.push(i);
    }

    return set1;
}

const newSet1 = generateNumArry(9);
console.log(newSet1);       // (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(newSet1.pop()); // 8
console.log(newSet1.pop()); // 7

console.log(newSet1);       // (7) [0, 1, 2, 3, 4, 5, 6]

// --------------------------------------

function generateNumArry (long2) {
    let set2 = [];
    for (let i = 0; i < long2; i++) {
        set2.push(i * 3);
    }

    return set2;
}

const newSet2 = generateNumArry(9);
console.log(newSet2); // (9) [0, 3, 6, 9, 12, 15, 18, 21, 24]