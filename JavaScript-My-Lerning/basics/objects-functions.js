// Objects Functions

function genrateUser (name, age, email, city, job) {
    return {
        userName: name,
        age: age,
        userEmail: email,
        city: city,
        profession: job
    }
}

let userName1 = genrateUser("Jan Nowak", 35, "jannowak@example.con", "Poland", "Driver");
console.log(userName1);

let userName2 = genrateUser("Ewa Kowalska", 28, "ewakowalska@example.con", "Poland", "Barber");
console.log(userName2);
