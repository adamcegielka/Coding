public class Lesson16DoWhileLoop {
    public static void main(String[] args) {

        int number = 21;

        do {
            System.out.println("My value is: " + number + " and I am less than 20");
            number++;
        } while (number < 20);
    }
}

// wykona się co najmniej raz nawet gdy warunek w while jest równy false
