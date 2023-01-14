package com.example.javadlatesterow;

import java.util.Scanner;

// POBIERANIE DANYCH OD UŻYTKOWNIKA
public class PobieranieDanychUzytkownika {

    // Wpisanie imienia i przywitanie

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Jak masz na imię?");
        String name = scanner.nextLine();
        System.out.println("Witaj " + name + "!");
    }


    // Działanie matematyczne

 /*
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Wpisz liczbę:");
        int number = scanner.nextInt();
        int result = number * number;
        System.out.println(number + " do kwadratu to: " + result);
    }
 */

    // Obliczenie ile użytkownik ma lat

 /*
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Wpisz Twój rok urodzenia:");
        int dateBirth = scanner.nextInt();
        int yearNow = 2023;
        int result = yearNow - dateBirth;
        System.out.println("Masz " + result + " lat");
    }
 */
}
