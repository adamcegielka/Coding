package com.example.javadlatesterow;

// INSTRUKCJA WARUNKOWA IF
public class InstrukcjaWarunkowaIf {

    public static void main(String[] args) {
        float firstNumber = 8.0F;
        float secondNumber = 5.0F;

        if(secondNumber != 0) {
            System.out.println("Wynik dzielenia: " + (firstNumber / secondNumber));
        } else {
            System.out.println("Podaj inną liczbę");    // Przy wpisaniu liczby 0 w secondNumber
        }
    }
}