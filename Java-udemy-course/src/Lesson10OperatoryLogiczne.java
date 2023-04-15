public class Lesson10OperatoryLogiczne {
    public static void main(String[] args) {

        boolean valueA = true;
        boolean valueB = false;
        boolean valueC = false;
        boolean valueD = true;
        boolean valueE = 1 > 2;
        boolean valueF = 1 < 2;

        // && (i) - true, gdy wyniki są równe true
        System.out.println(valueA && valueD);   // true
        System.out.println(valueA && valueB);   // false
        System.out.println(valueB && valueD);   // false
        System.out.println(valueC && valueC);   // false

        System.out.println(valueE && valueF);   // false

        // || (lub) - true, gdy jeden wynik jest równy true
        System.out.println(valueB || valueB);   // false
        System.out.println(valueA || valueB);   // true
        System.out.println(valueC || valueD);   // true
        System.out.println(valueA || valueA);   // true

        System.out.println(valueE || valueF);   // true

        // ! (nieprawda, że) - daje wartość odwrotną do wartości przed którym się znajduje
        System.out.println(!valueA);            // false
        System.out.println(!valueB);            // true
        System.out.println(!(valueA&&valueB));  // true

    }
}

/*
OPERATORY LOGICZNE:

&&   Komunikacja (i)
||   Alternatywa (lub)
!    Negacja     (nieprawda, że)

 */