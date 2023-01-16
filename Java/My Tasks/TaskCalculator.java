package com.example.javadlatesterow;

import java.util.Scanner;

public class TaskCalculator {

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Enter the first number: ");
            int numberA = scanner.nextInt();

            System.out.println("Enter the second number: ");
            int numberB = scanner.nextInt();

            int addition = numberA + numberB;
            System.out.println("The result of the addition is: " + addition);

            int subraction = numberA - numberB;
            System.out.println("The result of the subtraction is: " + subraction);

            int muliplication = numberA * numberB;
            System.out.println("The result of the multiplication is: " + muliplication);

            int division = numberA / numberB;
            System.out.println("The result of the division is: " + division);
    }
}
