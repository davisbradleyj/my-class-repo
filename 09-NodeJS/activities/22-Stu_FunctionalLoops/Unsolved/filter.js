const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(function (data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
const primeArray = originalArray.filter(() => isPrime());

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
num => num > 5
const moreThan5Array = originalArray.filter(() => {
  for (let i = 0; i<originalArray.length; i++)
    if (originalArray[i]>5) {
    moreThan5Array.push(originalArray[i])
}
return moreThan5Array
}
  // Bonus: Use arrow functions as callbacks!
