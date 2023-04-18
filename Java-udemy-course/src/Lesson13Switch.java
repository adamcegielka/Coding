public class Lesson13Switch {
    public static void main(String[] args) {

        String dish = "Dessert";

        switch (dish) {
            case "Pizza":
                System.out.println("The price is 29 zl");
                break;
            case "Dessert":
                System.out.println("The price is 34 zl");
                break;
            case "Pasta":
                System.out.println("The price is 39 zl");
                break;
            default:
                System.out.println("No dish on the menu");
        }
    }
}
