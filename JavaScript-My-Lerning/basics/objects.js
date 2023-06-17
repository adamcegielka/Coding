// Objects:

let address = {
    country: "Poland",
    city: "Sopot",
    street: "Zielona",
    number: 19,
    postcode: "80-444"
};
console.log(address);
console.log(address.city);

// -------------------------------------------------

let bankAccount = {
    firstName: "Jan",
    lastName: "Nowak",
    accountNumber: "11112222333344445555",
    accountBalance: 15000
}
console.log(bankAccount);

bankAccount.accountBalance = bankAccount.accountBalance + 5000;
console.log(bankAccount.accountBalance);        // 20000

bankAccount.country = "Poland";
console.log(bankAccount);
/*
accountBalance: 20000
accountNumber: "11112222333344445555"
country: "Poland"
firstName: "Jan"
lastName: "Nowak"
*/