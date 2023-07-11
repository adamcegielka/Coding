let company = {
  name: 'Example Ltd',
  street: 'Long',
  city: 'London',
  country: 'UK',
  employees: [],
};

function addEmpliyee(name, email, job) {
  let employee = {
    userName: name,
    email: email,
    job: job,
  };

  company.employees.push(employee);
}

addEmpliyee('John', 'john@example.com', 'QA');
addEmpliyee('Anna', 'anna@example.com', 'HR');
addEmpliyee('Ewa', 'ewa@example.com', 'Manager');

console.log(company);
