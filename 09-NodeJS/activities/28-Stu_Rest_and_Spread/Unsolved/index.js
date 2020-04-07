// 1. Copy the songs array into another array using spread and console.log what it returns.
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

const newSongs = [...songs, "Jeremy","Roxanne"]

console.log (newSongs)

// 2.  Modify the add function so that is uses the rest operator and maintains the same functionality. 
// You should still be able to pass in any number of arguments. Run the code first in your console to see the functionality.

function addition(x, y, ...z) {
  const array = [x, y, ...z];
  //The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return array.reduce((x, y) => x + y, 1); // you don't have to change this line of code but look up reduce if you're not sure what it does here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
}
console.log(addition(1, 2, 3, 4)); // 21

// code below here
// function addition(x, y, ...z){
// 	//a rest paramter has to be the last argument in params
// 	var one = x;
// 	var two = y;
// 	var restArray = z;
