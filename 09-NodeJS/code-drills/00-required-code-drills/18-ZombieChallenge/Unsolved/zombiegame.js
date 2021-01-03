// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

// access inquirer package
const inquirer = require('inquirer');

// set health

let playerHealth = 100;
let zombieHealth = 19;

// create function to control 'combat'

function combat() {
  inquirer.prompt(
    [{
      type: 'list',
      name: 'playerGuess',
      message: 'Pick a number between 1-5.  If you pick the right number you hit the zombie.',
      choices: ['1', '2', '3', '4', '5']
    }]).then(function (guess) {

    if (zombieHealth > 0 || playerHealth > 0) {
      // determine zombie's 'number'
      let zombieNumber = Math.ceil(Math.random() * 5)
      console.log("----------")
      console.log("Zombie's number is " + zombieNumber)

      // determine damage
      let damage = Math.ceil(Math.random() * 5)

      // determine who gets hit
      if (zombieNumber === parseInt(guess.playerGuess)) {
        zombieHealth -= damage
        console.log("----------")
        console.log("You've hit the zombie!")
        console.log("Your health is still " + playerHealth + ".")
        console.log("Zombie health is now " + zombieHealth + ".")
        console.log("----------")
        alive()
      } else {
        playerHealth -= damage
        console.log("----------")
        console.log("The zombie hit you!")
        console.log("Your health is now " + playerHealth + ".")
        console.log("Zombie health is still " + zombieHealth + ".")
        console.log("----------")
        alive()
      }
    }
  })
}

function alive() {
  if (playerHealth < 1) {
    console.log("You're Dead!")
    console.log("Game Over!")
    console.log("----------")
    process.exit()
  }
  if (zombieHealth < 1) {
    console.log("You killed the zombie!")
    console.log("Nicely Done!")
    process.exit()
  }
  combat();
}

combat();
