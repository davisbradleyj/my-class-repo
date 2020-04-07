const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
  for (var i=0; i<animalJSON.length; i++) {
    if (animalJSON[i].species === 'cat') {
      cats.push(animalJSON[i]);
    } else if (animalJSON[i].species === 'dog') 
      dogs.push(animalJSON[i]);
    }
    console.log(cats)
    console.log(dogs)
  
    
  const dogJSON = JSON.stringify(dogs,null,2);
  const catJSON = JSON.stringify(cats,null,2);

  fs.writeFile("dogs.json", dogJSON, function(err) {
    if (err) {
      throw err;
    }
  });
  fs.writeFile("cats.json", catJSON, function(err) {
    if (err) {
      throw err;
    }
  });
})
