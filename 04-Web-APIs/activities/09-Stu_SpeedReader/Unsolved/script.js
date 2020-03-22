var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(' ');
console.log(words);

var timeEl = document.querySelector(".time");
var readEl = document.getElementById("read");


var secondsTimer = 5;

function prepareRead() {
// Create the countdown timer.
  var timerInterval = setInterval(function() {
    secondsTimer--;
    timeEl.textContent = "Prepare to read in " + secondsTimer + " seconds.";

    if(secondsTimer === 0) {

      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}


function speedRead() {
  // Print words to the screen one at a time.
  var secondsRead = 60;
  var poemInterval = setInterval(function() {
    var i = 0
    if (words[i]) === undefined; {
      clearInterval(poemInterval);
    } else { 

    }
    readEl.textContent = 
  }


  }, 1000);
}

prepareRead();
