function fibonacci(n) {
  if (n==2) {
    return [0, 1];
  } 
  else {
    let hold = fibonacci(n-1);
    console.log(hold)
    hold.push(hold[hold.length - 1] + hold[hold.length - 2]);
    return hold;
  }
};


console.log(fibonacci(4))