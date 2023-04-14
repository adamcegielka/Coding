public class Lesson05OperatoryMatematyczne {
    public static void main(String[] args) {
        int firstNumber = 4;
        int secondNumber = 6;
        float thirdNumber = 4.0f;

        int addition = firstNumber + secondNumber;         // 10
        int subraction = firstNumber - secondNumber;       // -2
        int multiplication = firstNumber * secondNumber;   // 24
        float division = thirdNumber / secondNumber;       // 0.6666667
        int mod = secondNumber % firstNumber;              // 2 (4 mieści się w 6 = 1, zostaje 2)

        System.out.println("Dodawanie: " + addition);
        System.out.println("Odejmowanie: " + subraction);
        System.out.println("Mnożenie: " + multiplication);
        System.out.println("Dzielenie: " + division);
        System.out.println("Modulo: " + mod);

        // Inny sposób zapisu

        firstNumber += secondNumber;    // firstNumber = firstNumber + secondNumber
        System.out.println("Po dodaniu: " + firstNumber);      // 10
        firstNumber -= secondNumber;    // firstNumber(10) - secondNumber
        System.out.println("Po odejmowaniu: " + firstNumber);  // 4
        firstNumber *= secondNumber;    // firstNumber(4) * secondNumber
        System.out.println("Po mnożeniu: " + firstNumber);     // 24
        firstNumber /= secondNumber;    // firstNumber(24) / secondNumber
        System.out.println("Po dzieleniu: " + firstNumber);    // 4
        firstNumber %= secondNumber;    // firstNumber(4) % secondNumber
        System.out.println("Po modulo: " + firstNumber);       // 4

    }
}
