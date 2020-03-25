var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var paused = false;
var running = false;

function updateMinutes() {
  var t = Math.floor(totalSeconds / 60).toString();
  if (t.length===1) {
    t="0"+t;
  }
  minutesDisplay.innerHTML = t;
};

function updateSeconds() {
  var t = (totalSeconds % 60).toString();
  if (t.length===1) {
    t="0"+t;
  }
  secondsDisplay.innerHTML = t;
};

function startTimer() {
  // Write code to start the timer here
  if (!running) {
   initTimer();
   running = true
   interval = setInterval( function () {
    updateMinutes();
    updateSeconds();
    if (!paused) {
      totalSeconds--;
    }
    if (totalSeconds === 0) {
      clearInterval(interval);
      if (statusToggle.checked) {
        alert("Take a Break!"); 
      } else {
        alert("Back to Work!");
      }
    }
    
  },1000)
};
};

function pauseTimer() {
  paused = !paused;
};

function stopTimer() {
  clearInterval(interval);
  running = false;
  initTimer();
  updateMinutes();
  updateSeconds();
};

function initTimer() {
  if (statusToggle.checked) {
  totalSeconds = workMinutesInput.value*60;
  paused = false
  } else {
  totalSeconds = restMinutesInput.value*60;
  }
}

function saveTime() {
  var arrSaveTime = []
  arrSaveTime.pop(workMinutesInput.value)
  arrSaveTime.pop(restMinutesInput.value)
  var mySaveTimeString = JSON.stringify(arrSaveTime)
  localStorage.tomatotimer = mySaveTimeString;
}

function readTIme() {
  var rawTime = localStorage.tomatotimer;
  if (rawTime != null) {
    var arrReadTime = JSON.parse(rawTime);
    workMinutesInput.value = arrReadTime[0];
    restMinutesInput.value = arrReadTime[1];
  }
}

function toggleStatus() {
  stopTimer();
  if (statusToggle.checked) {
  // working
  statusSpan.innerHTML = "Working"
  } else {
  // resting
  statusSpan.innerHTML = "Resting"  
  }
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
statusToggle.addEventListener("click", toggleStatus);