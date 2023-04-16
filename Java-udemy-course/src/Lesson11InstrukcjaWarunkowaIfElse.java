public class Lesson11InstrukcjaWarunkowaIfElse {

    public static void main(String[] args) {
        float dzielna = 8.0F;
        float dzielnik = 5.0F;

        if(dzielnik != 0) {                                     // warunek, dzielnik jest rózny od 0
            System.out.println("Wynik dzielenia: " + (dzielna / dzielnik));
        } else {
            System.out.println("Podaj inną liczbę niż 0");      // Przy wpisaniu liczby 0 w dzielnik
        }
    }
}
