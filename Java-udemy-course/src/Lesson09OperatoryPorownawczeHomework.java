import java.util.Scanner;
public class Lesson09OperatoryPorownawczeHomework {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a first  number:");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter a second  number:");
        int secondNumber = scanner.nextInt();

        System.out.println("First number == Second number :" + (firstNumber == secondNumber));
        System.out.println("First number != Second number :" + (firstNumber != secondNumber));
        System.out.println("First number >= Second number :" + (firstNumber >= secondNumber));
        System.out.println("First number <= Second number :" + (firstNumber <= secondNumber));
        System.out.println("First number > Second number :" + (firstNumber > secondNumber));
        System.out.println("First number < Second number :" + (firstNumber < secondNumber));
    }
}