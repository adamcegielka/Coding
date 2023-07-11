function createUser(name, contact) {
  let user = {
    name: name,
    email: null,
    phone: null,
  };

  if (typeof contact == 'string') {
    user.email = contact;
  } else if (typeof contact == 'number') {
    user.phone = contact;
  }

  return user;
}

let user1 = createUser('Adam', 'adam@example.com');
console.log(user1);

let user2 = createUser('Ewa', 123456789);
console.log(user2);
