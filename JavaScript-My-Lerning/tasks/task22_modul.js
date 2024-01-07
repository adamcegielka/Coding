// whether the number is even

function isEven(numberEven) {
    if (numberEven % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

    let numberOne = 7;
    let numberSecond = 12;
    let numberThird = 24;
    let numberFourth = 33;

    console.log(numberOne, isEven(numberOne));
    console.log(numberSecond, isEven(numberSecond));
    console.log(numberThird, isEven(numberThird));
    console.log(numberFourth, isEven(numberFourth));