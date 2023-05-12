// OBIEKTY

let result = document.getElementById("score");

// First way
let adam = {name: "Adam", age: 52,
    show: function() {
        return "Name: " + this.name + ", age: " + this.age + "<br>";
    }
};
console.log(adam);
result.innerHTML += adam.name;
result.innerHTML += ", age: " + adam['age'] + "<br>";

result.innerHTML += adam.show();


// Second way
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.show = function() {
        return "Name: " + this.name + ", age: " + this.age + "<br>";
    }
}

let ewa = new Person("Ewa", 31);
console.log(ewa);
result.innerHTML += ewa.name;
result.innerHTML += ", age: " + ewa['age'] + "<br>";

let jan = new Person("Jan", 44);
console.log(jan);
result.innerHTML += jan.name;
result.innerHTML += ", age: " + jan['age'] + "<br>";

result.innerHTML += ewa.show();
result.innerHTML += jan.show();
