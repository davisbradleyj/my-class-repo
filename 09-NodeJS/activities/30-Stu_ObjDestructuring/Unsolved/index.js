// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

// CODE BELOW HERE
const {first, last} = arya
console.log(first); // <= Arya
console.log(last); // <= Stark

// 2. Nested Object
const jon = {
  first: "Jon",
  last: "Snow",
  title: "Bastard",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark",
      brother3: "Brandon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

// CODE BELOW HERE
const {brother1, brother2, brother3} = jon.family.brothers

console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark
console.log(brother3);

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

// CODE BELOW HERE

const [name, alias, allegiance] = characters

console.log(name, alias, allegiance); 


// 4. Strings
const skills = 'The Usurper, male, Baratheon, Cersei'; 

// CODE BELOW HERE

const [slang, gender, family, spouse] = skills.split(",")

console.log(slang, gender, family, spouse); // print them by variable name