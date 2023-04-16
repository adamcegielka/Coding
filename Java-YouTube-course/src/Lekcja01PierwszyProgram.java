import java.util.Scanner;

public class Lekcja01PierwszyProgram {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String welcome;
        System.out.println("Podaj swoje imię: ");
        welcome = scanner.nextLine();
        System.out.println("Hello " + welcome);
    }
}
