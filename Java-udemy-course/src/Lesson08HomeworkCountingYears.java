import java.util.Scanner;

public class Lesson08HomeworkCountingYears {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your year of birth:");
        int dateBirth = scanner.nextInt();
        int yearNow = 2023;
        int result = yearNow - dateBirth;
        System.out.println("You are " + result + " years old");
    }
}