public class Lesson20KlasaAuta {

    public String markaAuta;
    public String modelAuta;
    public String colorAuta;
    public int rokProdukcjiAuta;
    public int przebiegAuta;

    public void ruszaj() {
        System.out.println("Auto rusza!");
    }

    public void hamuj() {
        System.out.println("Auto zatrzymuje się!");
    }

    public void dane() {
        System.out.println("Marka auta: " + markaAuta);
        System.out.println("Model auta: " + modelAuta);
        System.out.println("Kolor auta: " + colorAuta);
        System.out.println("Rok produkcji auta: " + rokProdukcjiAuta);
        System.out.println("Przebieg auta: " + przebiegAuta);
    }
}