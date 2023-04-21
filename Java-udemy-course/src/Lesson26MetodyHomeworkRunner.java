import java.util.Scanner;

public class Lesson26MetodyHomeworkRunner {

    // Homework Calculator

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a first  number:");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter a second  number:");
        int secondNumber = scanner.nextInt();

        Lesson26MetodyHomework lesson26MetodyHomework = new Lesson26MetodyHomework();

        int addition = lesson26MetodyHomework.addition(firstNumber, secondNumber);
        int subraction = lesson26MetodyHomework.subraction(firstNumber, secondNumber);
        int multiplication = lesson26MetodyHomework.multiplication(firstNumber, secondNumber);
        int division = lesson26MetodyHomework.division(firstNumber, secondNumber);
        int modulo = lesson26MetodyHomework.modulo(firstNumber, secondNumber);

        System.out.println("The result of addition is: " + addition);
        System.out.println("The result of subraction is: " + subraction);
        System.out.println("The result of multiplication is: " + multiplication);
        System.out.println("The result of division is: " + division);
        System.out.println("The result of mod is: " + modulo);
    }
}