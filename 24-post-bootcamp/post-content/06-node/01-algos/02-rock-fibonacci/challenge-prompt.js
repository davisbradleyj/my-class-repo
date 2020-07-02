// Fibonacci Sequence


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------
  var fib1 = []
  for (var i=0;i<num;i++) {
    if (i <= 1) {
      fib1.push(i)
    } else {
      var fib2 = fib1[i-2]+fib1[i-1]
      fib1.push(fib2)
    }
  }
  return fib1
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(fibonacci(num));

  });
})