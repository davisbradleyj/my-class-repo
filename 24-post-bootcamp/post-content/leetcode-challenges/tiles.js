


var numTilePossibilities = function(tiles) {
  if (tiles === 0) {
    return 0
  }

  let counter = 0
  let set = new Set()

  // determine and count the number of possible combinations  
  for (let i = 0; i<tiles.length; i++){
    if (set.has(tiles[i])) { // if tile is present, skip 
      continue
    }
    // counter for all combinations
    counter += numTilePossibilities(tiles.slice(0,i) + tiles.slice(i+1)) + 1
    set.add(tiles[i])
  }
  return counter
}; 