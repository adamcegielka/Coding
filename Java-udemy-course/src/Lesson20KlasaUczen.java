public class Lesson20KlasaUczen {

    public String name;
    public String surname;
    public String nick;
    public String email;
    public int phone;

    public void subscribe() {
        System.out.println("My name is: " + name + " " + surname);
    }
    public void login() {
        System.out.println("Login with nickname: " + nick);
    }
    public void enterEmailPhone() {
        System.out.println("My email and phone: " + email + " " + phone);
    }
}
