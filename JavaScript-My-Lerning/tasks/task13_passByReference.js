// Pass by reference

let employee = {
    name: "Adam",
    email: "adam@example.com",
    rank: "tester",
    salary: 7000
};

function promoteToManager(user) {
    if (user.rank == "manager") {
        console.log("User is a manager");
        return;
    }

    user.rank = "manager";
    let salary = user.salary
    user.salary = salary + salary * 0.5;
};

promoteToManager(employee);
console.log(employee);
