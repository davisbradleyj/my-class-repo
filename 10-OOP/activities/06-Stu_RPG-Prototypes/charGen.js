function Character(name, profession, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.PrintStats = function () {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
        "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHit Points: " + this.hp);
    }
}
var dan = new Character("Dan F","Blacksmith",32,19,19)
var brad = new Character("Brad D","Noble",37,16,32)

dan.PrintStats();
console.log("------------");
brad.PrintStats();

Character.prototype.IsAlive = function() {
    if (this.hp > 0) {
        console.log(this.name + " is still alive and has " + this.hp + " hp remaining!" )
    } else {
        console.log("Died of Dysentery")
    }
};
console.log("-------------------------");

dan.IsAlive();
console.log("------------");
brad.IsAlive();

console.log("-------------------------");
Character.prototype.Attack = function(character2) {
    console.log(this.name + " made an attack!");
    character2.hp -= this.strength;
    // console.log(character2.hp)
    character2.IsAlive();
};
brad.Attack(dan);
console.log("-------------------------");

Character.prototype.LevelUp = function() {
    console.log(this.name + " leveled up!");
    this.age += 1
    this.strength += 5
    this.hp += 25
    console.log(this.name + " is now " + this.age + ", has a strength of " + this.strength + ", and has " + this.hp + " hp.");
}
brad.LevelUp();
