public class Lesson22ObiektyHomework {

    public static void main(String[] args) {

        // first
        Lesson20KlasaUczen wawelski = new Lesson20KlasaUczen();
        wawelski.nick = "Dragon";
        wawelski.name = "Smok";
        wawelski.surname = "Wawelski";
        wawelski.email = "wawelski@example.com";
        wawelski.phone = 123456789;

        wawelski.subscribe();
        wawelski.login();
        wawelski.enterEmailPhone();

        //socond
        Lesson20KlasaUczen kowal = new Lesson20KlasaUczen();
        kowal.nick = "Kowal";
        kowal.name = "Stefan";
        kowal.surname = "Kowalski";
        kowal.email = "kowal@example.com";
        kowal.phone = 432567987;

        kowal.subscribe();
        kowal.login();
        kowal.enterEmailPhone();

        // third
        Lesson20KlasaUczen pawlak = new Lesson20KlasaUczen();
        pawlak.nick = "Knur";
        pawlak.name = "Jaśko";
        pawlak.surname = "Pawlak";
        pawlak.email = "pawlak@example.com";
        pawlak.phone = 465283765;

        pawlak.subscribe();
        pawlak.login();
        pawlak.enterEmailPhone();

        // Table of all students
        Lesson20KlasaUczen[] student = new Lesson20KlasaUczen[3];
        student[0] = wawelski;
        student[1] = kowal;
        student[2] = pawlak;

        for (int i = 0; i < student.length; i++) {
            student[i].subscribe();
            student[i].login();
            student[i].enterEmailPhone();
        }
    }
}
