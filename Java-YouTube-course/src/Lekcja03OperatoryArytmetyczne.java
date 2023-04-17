public class Lekcja03OperatoryArytmetyczne {
    public static void main(String[] args) {
        int a = 34;
        int b = 26;
        int dodawanie = a + b;
        System.out.println(dodawanie);                       // 60
        int inaczej = a + 15;
        System.out.println(inaczej);                         // 49

        int odejmowanie = a - b;
        System.out.println(odejmowanie);                     // 8

        int mnozenie = a * b;
        System.out.println(mnozenie);                        // 884

        double dzielenie = a / b;
        System.out.println(dzielenie);                       // 1.0

        int resztaDzielenia = a % b;
        System.out.println(resztaDzielenia);                 // 8

        int kolejnoscDzialania = 2 + 4 * 3;
        System.out.println(kolejnoscDzialania);              // 14

        int kolejnoscDzialaniaNawias = (2 + 4) * 3;
        System.out.println(kolejnoscDzialaniaNawias);        // 18

// --------------------------------------------------------------------------

        // a = a + b; - skracanie operatorów i otrzymanie nowej zmiennej "a"
        a += b;
        System.out.println(a);      // 60
        a -= b;
        System.out.println(a);      // 34
        a *= b;
        System.out.println(a);      // 884
        a /= b;
        System.out.println(a);      // 34
        a %= b;
        System.out.println(a);      // 8

// --------------------------------------------------------------------------

        // Wywołanie klasy statycznej
        // potęgowanie
        System.out.println(Math.pow(2, 3));         // 8.0
        System.out.println(Math.pow(2, 6));         // 64.0
        // pierwiastkowanie kwadratowe
        System.out.println(Math.sqrt(9));           // 3
        System.out.println(Math.sqrt(16));          // 4
        // wartość bezwzględna
        System.out.println(Math.abs(-44));          // 44

// --------------------------------------------------------------------------

        // inkrementacja
        a = 2;
        a++;
        a++;
        a++;
        System.out.println(a);      // 5

        a = 2;
        System.out.println(a++);    // 2
        System.out.println(a);      // 3

        //dekrementacja
        a = 10;
        a--;
        a--;
        a--;
        System.out.println(a);      // 7

        a = 10;
        System.out.println(a--);    // 10
        System.out.println(a);      // 9


        // postinkrementacja
        a = 2;
        ++a;
        ++a;
        ++a;
        System.out.println(a);      // 5

        a = 2;
        System.out.println(++a);    // 3
        System.out.println(a);      // 3

        //postdekrementacja
        a = 10;
        --a;
        --a;
        --a;
        System.out.println(a);      // 7

        a = 10;
        System.out.println(--a);    // 9
        System.out.println(a);      // 9

    }
}
