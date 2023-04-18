public class Lesson14ForLoop {
    public static void main(String[] args) {

        int number = 49;

        // i - specjalna zmiana sterująca
        for (int i = 0; i < number; i = i + 3) {
            System.out.println(i);
        }

        // j - specjalna zmiana sterująca
        for (int j = 0; j < number; j++) {
            if (j % 5 == 0)
                System.out.println(j);
        }

        for (int k = 0; k < number; k++)
            System.out.println("I must learn more");
    }
}
