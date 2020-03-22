var imgRandom = document.querySelectorAll("img");
var aTags = document.querySelectorAll("a");
var changeMain = document.querySelector("#main");

aTags[0].setAttribute("href", "https://github.com");
aTags[1].setAttribute("href", "https://facebook.com");
aTags[2].setAttribute("href", "https://google.com");
changeMain.setAttribute("style", "margin: 20px; padding: 10px; background: red");

for (var i = 0; i < imgRandom.length; i++) {
    imgRandom[i].setAttribute("src", href="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    imgRandom[i].setAttribute("alt", "hand");
}