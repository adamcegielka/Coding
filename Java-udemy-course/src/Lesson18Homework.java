public class Lesson18Homework {
    public static void main(String[] args) {
        /*
        Homework:
        - wypisać liczby z zakresu 1-100 podzielne przez 3
        - odwócić elementy tablicy [1,3,5] => [5,3,1]
         */

        // first - my solution
        int homework = 100;

        for (int i = 1; i < homework; i = i + 3) {
            System.out.println(i);
        }

        // first - dissolution of trainer - x % 3 == 0
        for (int i = 1; i < 100; i++) {
            if(i % 3 == 0)
                System.out.println("Podzielna przez 3: " + i);
        }

        // -------------------------------------------------

        // second - my solution
        int[] numbers = new int[] {1, 3, 5};

        System.out.println(numbers[2]);
        System.out.println(numbers[1]);
        System.out.println(numbers[0]);

        // second - dissolution of trainer
        for (int i = 0; i < (numbers.length/2); i++) {
            int temp = numbers[1];                          // dla i = 0  1  // i = 1  3
            numbers[i] = numbers[numbers.length - 1 - i];   // 4-> 0         // 3 => 7
            numbers[numbers.length - 1 - i] = temp;         // 1             // mumbers[3] = 3
        }

        for (int i =0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
