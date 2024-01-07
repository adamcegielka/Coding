// Three-element operator

let user = {
  email: 'adam@test.com',
  membershipCost: 100,
  numNembershipYears: 3,
  numberOfPosts: 40,
};

function extendMembeship(user) {
  let membershipDiscountFlag = user.numNembershipYears >= 2 ? true : false;

  let minPostFlag = user.numberOfPosts >= 30 ? true : false;

  if (membershipDiscountFlag && minPostFlag) {
    user.membershipCost *= 0.6;
    console.log(
      user.email,
      'Qualifies for a forum discount of value: ',
      user.membershipCost,
    );
  } else {
    console.log(
      user.email,
      'It has a standard forum price of: ',
      user.membershipCost,
    );
  }
}

extendMembeship(user);
