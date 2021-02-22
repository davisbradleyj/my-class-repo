// Louise joined a social networking site to stay in touch with her friends. 
// The signup page required her to input a name and a password. However, the password must be strong. 
//T he website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let passLength = 0;
  let requirement = []
  const numbers = "0123456789"
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const special = "!@#$%^&*()-+"
  password.split('')
  for (let i = 0; i < password.length; i++) {
    // console.log('New Letter evaluated')
    if (numbers.includes(password[i]) && !requirement.includes('number')) {
      requirement.push('number');
    }
    if (lower.includes(password[i]) && !requirement.includes('lower')) {
      requirement.push('lower');
    }
    if (upper.includes(password[i]) && !requirement.includes('upper')) {
      requirement.push('upper');
    }
    if (special.includes(password[i]) && !requirement.includes('special')) {
      requirement.push('special');
    }
  }
  if (n < 6 && 4-requirement.length <= (6-n)) {
    return 6 - n;
  }
  passLength += (4-requirement.length)
  return passLength;
}

console.log(minimumNumber(3, 'Ab1'))
console.log(minimumNumber(11, '#HackerRank'))
console.log(minimumNumber(100, '!tvk^w$xMIAqf-)pMjS*KZeytibKm+(xPIV@&)kBPd)a#L+K+*)QBSCr&BpC*kTk$P^wGgJAXS!ju@fSpo+I(Q^LC&Lh%^Ce-Su%'))