// Programmer recruitment

function recruitProgrammer(email, level, yearsExp, languages) {
  if (level != 'mid') {
    console.log(email, ' - She/He is not a mid, recruitment failed');
    return false;
  }

  let jsExp = false;
  let tsExp = false;

  if (languages.indexOf('JavaScript') >= 0) jsExp = true;
  if (languages.indexOf('TypeScript') >= 0) tsExp = true;

  if (jsExp == true || tsExp == true) {
    // if know JS or TS
    if (yearsExp >= 1 && yearsExp < 6) {
      console.log(email, ' - The candidate meets all requirements');
      return true;
    }
  }

  return false;
}

recruitProgrammer('ania@test.com', 'mid', 4, ['JavaScript', 'TypeScript']);
recruitProgrammer('adam@example.com', 'junior', 2, ['Java']);
recruitProgrammer('kasis@domena.com', 'senior', 7, ['JavaScript', 'TypeScript']);
