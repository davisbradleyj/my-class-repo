function Mammal(name){
    this.name = name;
    this.warmBlooded = true;
    this.isHairy = true;
    this.bornAlive = true;
    this.largeBrain = true;
    this.species = "Unknown";
    this.hungry = true;
}


Mammal.prototype.eat = function(){
    this.hungry = false;
    console.log(`No Longer Hungry`);
};

Mammal.prototype.hungry = function(){
    this.hungry = true;
    console.log(`Hungry - please feed`);
};

Mammal.prototype.printStats = function(){
    
    console.log(`
    nickname: ${this.nickname}
    warmBlooded: ${this.warmBlooded}
    isHairy: ${this.isHairy}`);


};

//The apply() method calls a function with a given this value, 
//and arguments provided as an array

function Human(...args){
    Mammal.apply(this, args);
    this.species = 'human';
    this.hello = function (){
        console.log(`Hello`);
    }
}

//add prototype methods from Mammal - must be a new object based on the protoype methods belonging to user
//prototype chain
Human.prototype = Object.create(Mammal.prototype);

Human.prototype.speak = function(){
    console.log(`I am ${this.species}`);
};

var mammalOne = new Mammal('Farley');
var mammalTwo = new Mammal('Yoshi');
var human = new Human('Asher');

var animals = [mammalOne, mammalTwo, human];

console.log(animals[2] instanceof Human);//true