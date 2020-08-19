// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. 
// Naturally, you would like to find out the house number of the people on the other side of the street. 
// The street looks something like this:


function overTheRoad(address, n){
  return (n*2) - (address-1)
}


console.log(overTheRoad(3,5))