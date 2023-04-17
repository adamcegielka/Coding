public class Lekcja02TypyDanychZmienneStale {
    public static void main(String[] args) {
        // Jeden znak
        char oneMark;
        oneMark = 'e';
        System.out.println(oneMark);

        // String
        String name;
        name = "Learning to program";
        System.out.println(name);

        // Boolean: true, false
        boolean logicalType;
        logicalType = true;
        System.out.println(logicalType);

        // Liczby (stałoprzecinkowe)
        byte byteNumberMin = Byte.MIN_VALUE;
        byte byteNumberMax = Byte.MAX_VALUE;
        System.out.println("byte: " + " od " + byteNumberMin + " do " + byteNumberMax);
                // od -128 do 127

        short shortNumberMin = Short.MIN_VALUE;
        short shertNumberMax = Short.MAX_VALUE;
        System.out.println("short: " + " od " + shortNumberMin + " do " + shertNumberMax);
                // od -32768 do 32767

        int integerMin = Integer.MIN_VALUE;
        int integerMax = Integer.MAX_VALUE;
        System.out.println("integer: " + " od " + integerMin + " do " + integerMax);
                // od -2147483648 do 2147483647

        long longNumberMin = Long.MIN_VALUE;
        long longNumberMax = Long.MAX_VALUE;
        System.out.println("long: " + " od " + longNumberMin + " do " + longNumberMax);
                // od -9223372036854775808 do 9223372036854775807

        // liczby rzeczywiste (zmiennoprzecinkowe)
        float floatNumberMin = Float.MIN_VALUE;
        float floatNumberMax = Float.MAX_VALUE;
        System.out.println("float: " + " od " + floatNumberMin + " do " + floatNumberMax);
                // od 1.4E-45 do 3.4028235E38
        float floatNumber = 8.12345F;
        System.out.println("float number: " + floatNumber);

        double doubleNumberMin = Double.MIN_VALUE;
        double doubleNumberMax = Double.MAX_VALUE;
        System.out.println("double: " + " od " + doubleNumberMin + " do " + doubleNumberMax);
                // od 4.9E-324 do 1.7976931348623157E308
        double doubleNumber = 9.12345678910111213D;
        System.out.println("double number: " + doubleNumber);


        // Zmienne
        int firstNumber = 24;
        int secondNumber = 36;
        firstNumber = secondNumber;
        System.out.println(firstNumber);
                // 36


        // Stała (final )
        final int constantNumber = 123;
    }
}
