// Complete the caesarCipher function in the editor below. It should return the encrypted string.

// caesarCipher has the following parameter(s):

// s: a string in cleartext
// k: an integer, the alphabet rotation factor

function caesarCipher(s, k) {
  if (k < 0) {
    return caesarCipher(s, k + 26);
  }
  let cipher = '';

  for (let i=0; i < s.length; i++) {
    let c = s[i];
    if (c.match(/[a-z]/i)) {
      var code = s.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + k) % 26) + 65);
      }
      else if (code >= 97 && code <=122 ) {
        c = String.fromCharCode(((code - 97 + k) % 26) + 97);
      }
    }
    cipher += c;
  }
  return cipher;
}

console.log(caesarCipher('middle-Outz',2))