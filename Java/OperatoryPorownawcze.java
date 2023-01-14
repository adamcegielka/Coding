package com.example.javadlatesterow;
// OPERATORY PORÓWNANIA
/*
==   równy
!=   różny
>=   większy lub równy
<=   mniejszy lub równy
>    większy
<    mniejszy
 */
public class OperatoryPorownawcze {

    public static void main(String[] args) {
        int numberC = 10;
        int numberD = 3;

        boolean result = numberC > numberD;   // true

        System.out.println(result);
        System.out.println("C = D :" + (numberC == numberD));      // false
        System.out.println("C ! D :" + (numberC != numberD));      // true
        System.out.println("C >= D :" + (numberC >= numberD));     // true
        System.out.println("C <+ D :" + (numberC <= numberD));     // false
        System.out.println("C > D :" + (numberC > numberD));       // true
        System.out.println("C < D :" + (numberC < numberD));       // false
    }
}
