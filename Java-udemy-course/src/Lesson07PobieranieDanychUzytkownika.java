import java.util.Scanner;

public class Lesson07PobieranieDanychUzytkownika {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your name?");
        String name = scanner.nextLine();
        System.out.println("Hello " + name + "!");
    }
}

/*
 Działanie matematyczne:

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number:");
        int number = scanner.nextInt();
        int result = number * number;
        System.out.println(number + " squared is: " + result);
    }
*/