var status = false
// take user input
var argument1 = process.argv[2]
// console input
console.log("user input : " + argument1)
// write a function
function conjunction() {
    console.log("whats your function")
}
// write another function
function junction() {
    console.log("hooking up words and phrases and clauses")
}
// write a switch statement
switch (argument1) {
    // give it a case 
    case "hello":
        status = true
        // if/else logic
        if (status === true) {
            conjunction()
        } else {
            console.log("Next cartoon");
        }
        break;
    //break
    // another case
    case "goodbye":
        junction()   
        break;
    }