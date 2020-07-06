var gabumon = {
    digivolutions: [
      {
        stage: 1,
        name: "Garurumon"
      },
      {
        stage: 2,
        name: "WereGarurumon"
      },
      {
          stage: 3,
          name: "MetalGarurumon"
      },
      {
          stage: 4,
          name: "ZeedGarurumon"
      }
    ],
    image: "https://vignette.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg/revision/latest?cb=20171127121438"
  };


// Select the div with a class of tagline
var tagline = d3.select(".tagline").text();

// console.log the text within the tagline
console.log(tagline)

// replace the text with "D3gimon are the Champions!"
d3.select(".tagline").text("D3gimon are the Champions!")

// Capture the HTML link for "D3 D3 D3givolve"
var link = d3.select(".digi-link").html()
console.log(link)

// Select the child element for the link
var linkChild = d3.select(".digi-link>a")
console.log(linkChild)

// Capture the child element's href attribute
var linkChildAttribute = linkChild.attr("href");
console.log(linkChildAttribute)

// Change the link to any digimon related video
linkChild.attr("href", "https://www.youtube.com/watch?v=O-QhiAc5n14")

// using the same selection, change the link's text to and href to the digimon wikipedia page
d3.select(".digi-link>a").attr("href", "https://en.wikipedia.org/wiki/Digimon").text("Digimon Wikipedia Page")

// Create a new <li> element and and append it to the <ul>, give this new element text of "Victory Greymon"
var list1 = d3.select("ul").append("li");
list1.text("Victory Greymon")

// Use chaining to create another new element and set its text as "Omnimon"
var list2 = d3.select("ul").append("li").text("Omnimon")

// Select the div with an id of "agumon" and append a new <img> element
var augmon = d3.select("#augmon").append("img");
augmon.attr("src","https://vignette.wikia.nocookie.net/deathbattlefanon/images/d/dd/Agumon_DALEK-0.png/revision/latest/scale-to-width-down/340?cb=20191125192407")
// Challenge section!

// This challege section provides more practice with accessing objects. You will need to use the `gabumon` object to generate content on the page.
// select the div with an id of gabumon and append the image to it.
// Append a new `<ul>` element to the div and then append a new `<li>` element for each digivolution name inside the object.


  
