
    console.log("==================== Question 01 ====================");
    // Create a function called `numberGuess` that takes in an integer as an argument. 
    // If the number is 42, console.log(true). If it isn't 42, console.log(false)
    function numberGuess(int) {
    // --------- code starts --------------
      if (int === 42) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
    // --------- code ends --------------
      
    // This is here to help you test your code
    var testNum = Math.floor(Math.random() * 100);
    console.log("Number ", testNum);
    numberGuess(testNum);
    console.log("Number ", 42);
    numberGuess(42);



    console.log("==================== Question 02 ====================");

    // Write a function that takes in an array of numbers. 
    // The function should console.log the smallest number in the given array

    function findSmallest(arr) {
    // --------- code starts --------------
      var smallNum = arr[0];
        for (var i = 1; i < arr.length - 1; i++) {
          if (arr[i] < smallNum){
            smallNum = arr[i]
          }
        }
      console.log(smallNum)
    // --------- code ends --------------
    }

    // This code is to help you test your function
    var nums = [10, 11, 3, 123, 54, 6, 67];
    findSmallest(nums);

    console.log("==================== Question 03 ====================");
    // Write a function which takes in an array of strings. 
    // The function should console.log the shortest string in the array.
    //

    function findShortest(arr){
    // --------- code starts --------------
      var shortest = arr[0].length;
      for (let i=1; i<arr.length; i++) {      
        if (arr[i].length < shortest) {
          shortest = arr[i].length
        }
      }
      console.log(shortest)

    // --------- code ends --------------
    }

    // This code is to help you test your function
    var strings = ["hey there", "yo", "a", "hello", "what up", "hello, my name is farley", "howdy"];
    findShortest(strings);

  

    console.log("==================== Question 04 ====================");
    // Write a function that takes in three arguments: a high value, a low value and an array of numbers. 
    // The function should console.log a new array of numbers where none of the elements are less than
    // the low value and none of the elements are greater than the high value

    function filterArray(high, low, arr){
    // --------- code starts --------------
      let hold = []
      for (let i=0; i<arr.length; i++) {
        if (arr[i] <= high && arr[i] >= low) {
          hold.push(arr[i])
        }
      }
      console.log(hold)
    // --------- code ends --------------
    }

    // This code is to help you test your function
    var down = 10;
    var up = 20;
    var arr = [2,5,99,15,23,18,11,21];

    filterArray(up, down, arr);

