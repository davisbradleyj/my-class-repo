function rotLeft(a, d) {
  let hold = []
  hold = a.splice(d, a.length - 1)
  // console.log(hold, a)
  for (let i = 0; i < a.length; i++) {
    hold.push(a[i])
  }
  return hold
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))