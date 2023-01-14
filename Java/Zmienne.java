package com.example.javadlatesterow;
// Zmienne - zarezerwowane miejsce z określonym typem danych
public class Zmienne {
    public static void main(String[] args) {

        String name = "Adam";
//      name = "Sylwia";     // - można nadpisać i wyświetli się Sylwia

        System.out.println(name);


        int firstNumber = 1;
        int secondNumber = 2;
        int result = firstNumber + secondNumber;

        System.out.println(result);
    }

}

/*
Możemy wywołać też w ten sposób:

        int firstNumber, secondNumber, result;

        firstNumber = 1;
        secondNumber = 2;
        result = firstNumber + secondNumber;

LUB

        int firstNumber;
        int secondNumber;
        int result;

        firstNumber = 1;
        secondNumber = 2;
        result = firstNumber + secondNumber;

 */