public class Lesson21ObiektyAuto {

    public static void main(String[] args) {

        Lesson20KlasaAuta audi = new Lesson20KlasaAuta();
        audi.markaAuta = "Audi";
        audi.modelAuta = "A7";
        audi.colorAuta = "Red";
        audi.rokProdukcjiAuta = 2023;
        audi.przebiegAuta = 102;

        audi.ruszaj();
        audi.hamuj();
        audi.dane();


        Lesson20KlasaAuta bmw = new Lesson20KlasaAuta();
        bmw.markaAuta = "BMW";
        bmw.modelAuta = "Q7";
        bmw.colorAuta = "Black";
        bmw.rokProdukcjiAuta = 2022;
        bmw.przebiegAuta = 5029;

        bmw.ruszaj();
        bmw.hamuj();
        bmw.dane();


        Lesson20KlasaAuta skoda = new Lesson20KlasaAuta();

        skoda.ruszaj();
        skoda.hamuj();
        skoda.dane();

    }
}