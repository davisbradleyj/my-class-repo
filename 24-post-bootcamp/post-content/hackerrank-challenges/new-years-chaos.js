

function minimumBribes(q) {
  let swaps = 0
  for (let i=0; i<q.length; i++) {
    if (q[i] > (i+3)) {
      console.log('Too chaotic')
      return
    }
    else if (q[i] > i) {
      swaps = swaps + (q[i] - (i+1))
    } else if (q[i] > q[i+1]) {

    }
  }
 console.log(swaps)
}

console.log(minimumBribes([2,1,5,3,4]))
console.log(minimumBribes([2,5,1,3,4]))


function bribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--){
      if (q[i] - i > 3){
      console.log('Too chaotic')
      return
      }
      if (q[i] > i+1){
          swaps += (q[i]-(i+1));
      } else {
          if (min > q[i]){
              min = q[i];
          } else if (q[i] != min){
              swaps++;
          }
      }
  }
  return swaps;
}

console.log(bribes([2,1,5,3,4]))
console.log(bribes([2,5,1,3,4]))
