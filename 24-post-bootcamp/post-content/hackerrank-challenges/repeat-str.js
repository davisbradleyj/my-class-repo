


function repeatedString(s, n) {
  let occurances = (s.split("a").length - 1);  // determine how many times 'a' appears in string
  let repeats = occurances * Math.floor(n / s.length); // minimum number of occurances before the the last 'a' can be found
  repeats += s.slice(0, n % s.length).split('a').length - 1; // add the count of 'a' appearing in the remaining letters split out from one last instance of string
  return repeats;
}

console.log(repeatedString('aba',10))