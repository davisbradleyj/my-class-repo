// Create your HTML Page via DOM Methods here!
var headerOne = document.createElement("h1");
var headerTwo = document.createElement("h2");
var img1 = document.createElement("img");

headerOne.textContent = "Test";
document.body.appendChild(headerOne);
headerOne.setAttribute("style", "text-align: center");

headerTwo.textContent = "Test";
document.body.appendChild(headerTwo);
headerTwo.setAttribute("style", "text-align: center");

document.body.appendChild(img1);
img1.setAttribute("src", "https://i.insider.com/59b7f4bc9803c578288b45a6?width=500&format=jpeg&auto=webp");
img1.setAttribute("style", "image-align: center");