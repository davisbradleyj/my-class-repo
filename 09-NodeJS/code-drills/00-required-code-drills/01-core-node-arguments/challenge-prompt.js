
// var arr = ["1","2","3"]
// for (var i = 0; i<arr.length;i++) {
//     console.log(arr[i]);
// }


/////////////////////////////5.1///////////////////////////////////////////

// console log "Hello World"

// ---------- code starts here ----------

// console.log("hello world")



// ---------- code ends here ---------- 

/////////////////////////////5.2///////////////////////////////////////////

// next console log the command line arguments when this file is run in node

// ---------- code starts here ---------- 


// ---------- code ends here ---------- 

/////////////////////////////5.3///////////////////////////////////////////

// Console log the first and second command line argument that the user gives this file
// if there is no input it should come back undefined

// ---------- code starts here ---------- 
// var arr = process.argv[4]
//     console.log(arr)




// ---------- code ends here ---------- 

/////////////////////////////5.4///////////////////////////////////////////

// If the first command line argument given to this file is "minion" and the second argument is "army", console log "I have found Gru"
// If the first command line argument given to this file is "minion" and the second argument is not "army", console log "Still looking for Gru"
// For any other command line arguments, console log "Minion RAGE!"

// ---------- code starts here ---------- 
if (process.argv[2] === "minion" && process.argv[3] === "army") {
    console.log("I have found Gru");
} else if (process.argv[2] === "minion" && process.argv[3] !== "army") {
    console.log("Still looking for Gru")
} else {
    console.log("Minion RAGE!")
} 

// ---------- code ends here ---------- 
