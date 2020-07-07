// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function q1() {
    alert("Q1")
}
setTimeout(q1,5000)


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function q2(){
    alert("Q2")
}
setTimeout(q2,15000)

// Remove the timer you just made for Question 2
clearTimeout(q2)

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
function q31(){
    alert("Q3 Part 1")
}
setTimeout(q31,15000)

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function q32(){
    alert("Q3 Part 2")
}
setTimeout(q32,16000)

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(q31)

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"

setTimeout(function() {
    console.log("Q5 completed")
},11000)

