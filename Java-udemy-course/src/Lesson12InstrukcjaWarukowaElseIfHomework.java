import java.util.Scanner;
public class Lesson12InstrukcjaWarukowaElseIfHomework {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Wpisz ile masz lat: ");
        int age = scanner.nextInt();

        if (age == 17) {
            System.out.println("Musisz poczekać jeszcze rok");
        } else if (age > 69) {
            System.out.println("Jesteś za stary");
        } else if (age >= 18) {
            System.out.println("Jesteś pełnoletni");
        } else if (age < 1) {
            System.out.println("Wpisz poprawną wartość!");
        } else if (age < 13) {
            System.out.println("Jesteś jeszcze dzieckiem");
        } else  {
            System.out.println("Jesteś niepełnoletni");
        }
    }
}
