public class Lesson17Tablice {
    public static void main(String[] args) {

        // dni tygodnia
        String[] day = new String[7];
        day[0] = "Monday";
        day[1] = "Tuesday";
        day[2] = "Wednesday";
        day[3] = "Thursday";
        day[4] = "Friday";
        day[5] = "Saturday";
        day[6] = "Sunday";

        System.out.println(day[0]);
        System.out.println(day[1]);
        System.out.println(day[2]);
        System.out.println(day[3]);
        System.out.println(day[4]);
        System.out.println(day[5]);
        System.out.println(day[6]);

        // liczba losowa
        int[] randomNumber = new int[] {1,2,3,4,5,6,7};

        System.out.println(randomNumber[0]);
        System.out.println(randomNumber[1]);
        System.out.println(randomNumber[2]);
        System.out.println(randomNumber[3]);
        System.out.println(randomNumber[4]);
        System.out.println(randomNumber[5]);
        System.out.println(randomNumber[6]);

        // ile elementów znajduje sie w tablicy
        System.out.println(randomNumber.length);

        // odwołanie do indeksu: day
        for ( int i = 0; i < day.length; i++) {
            System.out.println(day[i]);
        }
    }
}
