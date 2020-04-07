const music = {
  band: "Pearl Jam",
  style: "Grunge",
  song: "Jeremy",
  location: "Detroit"
};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `We are ${music.band}!
 You rock ${music.location}...
 but to close our the night, here's ${music.location}`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
