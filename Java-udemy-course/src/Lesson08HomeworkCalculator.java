import java.util.Scanner;
public class Lesson08HomeworkCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a first  number:");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter a second  number:");
        int secondNumber = scanner.nextInt();

        int addition = firstNumber + secondNumber;
        int subraction = firstNumber - secondNumber;
        int multiplication = firstNumber * secondNumber;
        int division = firstNumber / secondNumber;
        int mod = secondNumber % firstNumber;

        System.out.println("The result of addition is: " + addition);
        System.out.println("The result of subraction is: " + subraction);
        System.out.println("The result of multiplication is: " + multiplication);
        System.out.println("The result of division is: " + division);
        System.out.println("The result of mod is: " + mod);
    }
}