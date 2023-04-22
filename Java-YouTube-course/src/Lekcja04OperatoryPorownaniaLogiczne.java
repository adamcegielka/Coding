public class Lekcja04OperatoryPorownaniaLogiczne {

    public static void main(String[] args) {

        System.out.println("Operatory porównania:");
        int x = 7, y = 8;

        boolean logicznaA = x == y;      // false
        boolean logicznaB = x != y;      // true
        boolean logicznaC = x >= y;      // false
        boolean logicznaD = x <= y;      // true
        boolean logicznaE = x > y;       // false
        boolean logicznaF = x < y;       // true

        System.out.println(logicznaA);
        System.out.println(logicznaB);
        System.out.println(logicznaC);
        System.out.println(logicznaD);
        System.out.println(logicznaE);
        System.out.println(logicznaF);


        System.out.println("Operatory logiczne:"); // && - i,  || - lub

        boolean logicznaG = x <= y && x > y;       // false
        boolean logicznaH = x <= y || x > y;       // true
        boolean logicznaI = 3 == 3 && 4 > 5;       // false
        boolean logicznaJ = 3 == 3 || 4 > 5;       // true

        System.out.println(logicznaG);
        System.out.println(logicznaH);
        System.out.println(logicznaI);
        System.out.println(logicznaJ);

        System.out.println("--------");
        boolean logicznaK = 3 == 3 || true && true;       // true
        System.out.println(logicznaK);

        boolean logicznaL = !true;               // false - ! operator negacji
        System.out.println(logicznaL);

    }
}
