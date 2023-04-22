public class Lekcja05InstrukcjeWarunkoweIf {
    public static void main(String[] args) {
        int predkosc = 110;
        if (predkosc > 120) {
            System.out.println("Jedziesz za szybko!");
        } else if (predkosc < 40) {
            System.out.println("Jedziesz za wolno!");
        } else if (predkosc < 120) {
            System.out.println("Jedziesz przepisowo");
        } else {
            System.out.println("Nie przyspieszaj!");
        }

        String kierowca = predkosc >= 120 ? "Zachowaj ostrożność na drodze!" : "Nie dostaniesz mandatu";
        System.out.println(kierowca);
    }
}