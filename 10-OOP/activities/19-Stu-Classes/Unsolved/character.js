class Character {
  constructor(name, str, hp) {
    this.name = name;
    this.str = str;
    this.hp = hp;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log("Stats for " + this.name + " are as following: ");
    console.log("Each attack will do " + this.str + " damage.");
    console.log(this.name + " has " + this.hp + " hit points remaining!");
    console.log("------------");
  }

  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hp > 0) {
      return true
    } else {
    return false
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
  // console.log which character was attacked and how much damage was dealt
  console.log()
  // Then, change the opponent's hitPoints to reflect this

  }
}
  // Create two unique characters using the "character" class
  const character1 = new Character("steve", 6, 48)
  const character2 = new Character("harvey", 8, 31)
  character1.printStats();
  character2.printStats();
// Create an interval that alternates attacks every 2000 milliseconds
