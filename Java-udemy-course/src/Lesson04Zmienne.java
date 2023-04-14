public class Lesson04Zmienne {
// nazwy zmiennych: camelCase – system notacji ciągów tekstowych, w którym kolejne wyrazy pisane są łącznie, rozpoczynając każdy następny wielką literą (prócz pierwszego).
    public static void main(String[] args) {

        String name = "Adam";
        name = "Sylwia";         // - nadpisanie zmiennej Adam

        System.out.println(name);


        int firstNumber = 1;
        int secondNumber = 2;
        int result = firstNumber + secondNumber;

        System.out.println(result);
    }

}

/*
deklarowanie zmiennych tego samego typu:

        int firstNumber, secondNumber, result;

        firstNumber = 1;
        secondNumber = 2;
        result = firstNumber + secondNumber;

        System.out.println(result);

lub
        int firstNumber;
        int secondNumber;
        int result;

        firstNumber = 1;
        secondNumber = 2;
        result = firstNumber + secondNumber;

        System.out.println(result);
 */