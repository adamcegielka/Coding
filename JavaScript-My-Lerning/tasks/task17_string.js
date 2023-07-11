function getUserDescription(
  fullName,
  street,
  zip,
  city,
  country,
  email,
  phone,
) {
  const firstSign = fullName[0];
  const nameLength = fullName.length;
  const lastSign = fullName[fullName.length - 1];
  const secondSign = street[1];
  const streetLength = street.length;
  const zipLength = zip.toString().length;
  const cityLength = city.length;
  const countryLength = country.length;
  const emailLength = email.length;
  const fifthPhone = phone.toString()[4];

  return `
    User data: 
    Name ${fullName}, First name sign: ${firstSign}, Number of signs: ${nameLength}, The last sign is: ${lastSign}
    Street ${street}, Second street sign: ${secondSign}, Number of signs: ${streetLength}
    Zip, City, Country ${zip}, ${city}, ${country}, Numbers of signs: ${zipLength}, ${cityLength}, ${countryLength}
    Email ${email}, Number of signs: ${emailLength}
    Phone ${phone}, Fifth phone sign: ${fifthPhone}
    `;
}

const user1 = getUserDescription(
  'Jose Sanchez',
  'Doctor Esquerdo',
  '47874',
  'Roquetas de Mar',
  'Spain',
  'sanchez@yahoo.es',
  '203230102',
);
console.log(user1);

const user2 = getUserDescription(
  'Vital Barbier',
  'Rue des Écoles, 110',
  '73564',
  'Bordeaux',
  'France',
  'barbier@free.fr',
  '1514501460',
);
console.log(user2);

/*
    User data: 
    Name Jose Sanchez, First name sign: J, Number of signs: 12, The last sign is: z
    Street Doctor Esquerdo, Second street sign: o, Number of signs: 15
    Zip, City, Country 47874, Roquetas de Mar, Spain, Numbers of signs: 5, 15, 5
    Email sanchez@yahoo.es, Number of signs: 16
    Phone 203230102, Fifth phone sign: 3
*/

/*
    User data: 
    Name Vital Barbier, First name sign: V, Number of signs: 13, The last sign is: r
    Street Rue des Écoles, 110, Second street sign: u, Number of signs: 19
    Zip, City, Country 73564, Bordeaux, France, Numbers of signs: 5, 8, 6
    Email barbier@free.fr, Number of signs: 15
    Phone 1514501460, Fifth phone sign: 5
*/
