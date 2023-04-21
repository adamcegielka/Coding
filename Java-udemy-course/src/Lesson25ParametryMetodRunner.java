public class Lesson25ParametryMetodRunner {

    public static void main(String[] args) {
        Lesson25ParametryMetod lesson25ParametryMetod = new Lesson25ParametryMetod();
        /* lesson25ParametryMetod.countingNumbersParam(2);
        lesson25ParametryMetod.countingNumbersParam(16);
        lesson25ParametryMetod.countingNumbersParam(123);

        lesson25ParametryMetod.add(4,5); */


        // Modyfikacja kodu
        int result = lesson25ParametryMetod.add(7,8, "Code change");
        System.out.println(lesson25ParametryMetod.add(4,5, "Second code change"));
        System.out.println(result);

    }
}
