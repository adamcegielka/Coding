public class Lesson25ParametryMetod {

    public void countingNumbersParam(int number) {
        System.out.println("The number has the value: " + number);
        System.out.println("Number coutning");
        int result = 0;
        for (int i = 0; i < number; i++) {
            result = result + i;
        }
        System.out.println("Restult is: " + result);
    }

    /* public int add(int firstNumber, int secondNumber) {
        System.out.println("The result of adding to: " + (firstNumber + secondNumber));
                if(firstNumber == 0) {
            return 0;
        }
        return firstNumber + secondNumber; */


    // Modyfikacja kodu
    public int add(int firstNumber, int secondNumber, String word) {
        System.out.println(word);
        return firstNumber + secondNumber;

    }
}
