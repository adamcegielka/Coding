let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    numbers[i] = x * 3;
    console.log(numbers[i]);
}

// ---------------------------------------------

function multiplyArray(board) {
    let number = 1;

    for (let i = 0; i < board.length; i++) {
        number *= board[i];     // number = number * board[i];
    }

    return number;
}

console.log(multiplyArray([1, 2, 3, 4, 5])); // 120