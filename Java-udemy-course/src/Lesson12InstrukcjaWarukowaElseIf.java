public class Lesson12InstrukcjaWarukowaElseIf {

    public static void main(String[] args) {

        int number = 11;

        if (number == 0) {
            System.out.println("Liczba równa 0");
        } else if (number > 10) {
            System.out.println("Numer większy od 10");
        } else if (number > 0) {
            System.out.println("Liczba dodatnia");
        } else if (number < -4) {
            System.out.println("Liczba mniejsz od -4");
        } else {
            System.out.println("Żaden warunek nie został spełniony");
        }
    }
}
