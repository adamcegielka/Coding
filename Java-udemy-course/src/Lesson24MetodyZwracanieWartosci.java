public class Lesson24MetodyZwracanieWartosci {

    public int downloadResults() {
        System.out.println("Downloading result");
        int result = 1;
        for (int i = 1; i < 49; i++) {
            result = result + i;
        }
        System.out.println("Restult is: " + result);
        return result;
    }
}
