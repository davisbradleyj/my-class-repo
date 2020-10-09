function minimumDistances(a) {
  let min = []
  for (let i=0; i<a.length; i++) {
    for (let j=i+1; j<a.length; j++) {
      if (a[i] === a[j]) {
        // console.log(a)
        min.push(j-i)
      }
    }
    // console.log(min)
    min.sort((a,b) => a-b)
  }
  if (min[0] == null ) return -1
  else return min[0]
}

console.log(minimumDistances([7,1,3,4,1,7]))