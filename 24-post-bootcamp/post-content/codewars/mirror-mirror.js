function mirror(data) {
  let newData = []
  for (let i=0; i<data.length; i++) {
    newData.push(data[i])
  }
  newData.sort((a,b) => a-b)
  // console.log(newData)
  let hold = newData
  for (let i=newData.length-2; i>=0; i--) {
    hold.push(newData[i])
  }  
  return hold
}

console.log(mirror([-125, -313, -782, -788, -808, 18, 255, 26, 631, 690, 631, 26, 255, 18, -808, -788, -782, -313, -125]))