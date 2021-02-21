// Write a function that accepts fight string consists of only small letters and return who wins the fight. 
// When the left side wins return Left side wins! When the right side wins return Right side wins! 
// In other case return Let's fight again!.

function alphabetWar(fight) {
  let left = 0;
  let right = 0;
  fight = fight.split('')

  for (let i=0; i<fight.length; i++) {
    if (fight[i] == 'w') left += 4
    if (fight[i] == 'p') left += 3
    if (fight[i] == 'b') left += 2
    if (fight[i] == 's') left += 1
    if (fight[i] == 'm') right += 4
    if (fight[i] == 'q') right += 3
    if (fight[i] == 'd') right += 2
    if (fight[i] == 'z') right += 1
  }

  if (left > right) return "Left side wins!"
  else if (right > left) return "Right side wins!"
  else return "Let's fight again!";
}

console.log(alphabetWar("z"))
console.log(alphabetWar("zdqmwpbs"))