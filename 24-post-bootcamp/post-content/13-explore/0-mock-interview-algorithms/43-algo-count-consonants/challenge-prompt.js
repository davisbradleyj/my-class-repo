// Count Consonants


// In this activity, we're creating a function that counts the
// number of consonants in a string


// -------------------------------------------------------
//                       Count Consonants
// -------------------------------------------------------
function countCons(str) {
  // -------------------- Your Code Here --------------------
    let con = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    let count = 0
    for (let i=0; i<str.length; i++) {
      if (con.includes(str[i])){
        count++;
      }
    }
    return count
  // --------------------- End Code Area --------------------
}

// O(n)
// 0 log n

// This listens for and calls on the `countCons` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(countCons(num));

  });
})