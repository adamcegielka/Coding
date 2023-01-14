package com.example.javadlatesterow;
// OPERATORY LOGICZNE
/*
&&   Komunikacja (i)
||   Alternatywa (lub)
!    Negacja     (nieprawda, że)
 */

public class OperatoryLogiczne {
    public static void main(String[] args) {

        boolean valueA = true;
        boolean valueB = false;
        boolean valueC = false;
        boolean valueD = true;

        // && (i) - true, gdy wyniki są równe true
        System.out.println(valueA && valueD);   // true
        System.out.println(valueA && valueB);   // false
        System.out.println(valueB && valueD);   // false
        System.out.println(valueC && valueC);   // false

        // || (lub) - true, gdy jeden wynik jest równe true
        System.out.println(valueB || valueB);   // false
        System.out.println(valueA || valueB);   // true
        System.out.println(valueC || valueD);   // true
        System.out.println(valueA || valueA);   // true

        // ! (nieprawda, że) - daje wartość przeciwną
        System.out.println(!valueA);    // false
        System.out.println(!valueB);    // true

    }

}
