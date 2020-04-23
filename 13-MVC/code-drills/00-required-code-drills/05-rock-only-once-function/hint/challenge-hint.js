// Only Once Function


// The function onlyOnce console logs "I'm RUNNING!" and 
// returns true the very first time it's run
// If it's not the first time it's invoke, it should do nothing
// and return null
function onlyOnce() {
  // -------------------- Your Code Here --------------------
  // Reassign the onlyOnce pointer from the current function to a
  // new function that just returns null. Because onlyOnce is not
  // defined within this function, it will look for the variable in
  // the global scope which currently points to this function

  onlyOnce = function() {return false}

  // Console log "I'm RUNNING!"
console.log("I'm Running!")
  

  // return true
return true
  
  // -------------------- End Code Area ---------------------
}

console.log(onlyOnce())
console.log(onlyOnce())
console.log(onlyOnce())
