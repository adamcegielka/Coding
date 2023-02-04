package com.example.javadlatesterow;

// INSTRUKCJA WARUNKOWA ELSE IF
public class InstrukcjaWarukowaElseIf {

    public static void main(String[] args) {

        int age = 18;

        if (age == 17) {
            System.out.println("Musisz poczekać jeszcze rok");
        } else if (age > 69) {
            System.out.println("Jesteś za stary");
        } else if (age >= 18) {
            System.out.println("Jesteś pełnoletni");
        } else if (age < 13) {
            System.out.println("Jesteś jeszcze dzieckiem");
        } else  {
            System.out.println("Jesteś niepełnoletni");
        }
    }
}
