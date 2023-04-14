public class Lesson06InkrementacjaDekrementacja {
    public static void main(String[] args) {

        //inkrementacja: zwiększenie wartości o 1

        int a = 0;
        System.out.println("Value a: " + a);    // result: 0
        int b = a++;                            // a++ postinkrementacja: powoduje zwiększenie wartości zmiennej o jeden
        System.out.println("Value b: " + b);    // result: 0
        System.out.println("Value a: " + a);    // result: 1
        int c = ++a;                            // ++a preinkrementacja: Preinkrementacja powoduje zwiększenie wartości zmiennej o jeden, ale jej zwiększenie następuje przed wykorzystaniem zmiennej.
        System.out.println("Value c: " + c);    // result: 2
        System.out.println("Value a: " + a);    // result: 2

        // dekrementacja: zmniejszenie wartości o 1

        int d = 0;
        System.out.println("Value d: " + d);    // result: 0
        int e = d--;                           // a++ postdekrementacja: powoduje zmniejszenie wartości zmiennej o jeden
        System.out.println("Value e: " + e);    // result: 0
        System.out.println("Value d: " + d);    // result: -1
        int f = --d;                           // ++a predekrementacja: Preinkrementacja powoduje zmniejszenie wartości zmiennej o jeden, ale jej zmniejszenie następuje przed wykorzystaniem zmiennej.
        System.out.println("Value f: " + f);    // result: -2
        System.out.println("Value d: " + d);    // result: -2
    }
}
