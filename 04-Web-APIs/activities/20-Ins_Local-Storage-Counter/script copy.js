var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;


addButton.addEventListener("click", function() {
	// console.log(count);
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

// localStorage.setItem("Farley", "Meow");
// localStorage.removeItem("Farley");
// localStorage.clear();
