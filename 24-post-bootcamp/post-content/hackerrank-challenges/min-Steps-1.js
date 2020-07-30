// return an array of 

function minStepstoOne(n) {
    let steps = [];
    steps[0] = 0; 
    steps[1] = 0; 
  
    for(let i = 2; i <= n; i ++) {
      let minChoice = steps[i - 1]; 

      if(i % 2 == 0) {
        let divideByTwo = steps[i/2]
        minChoice = Math.min(divideByTwo, minChoice); 
        console.log("/2: ",divideByTwo)
      }
  
      if(i % 3 == 0) {
        let divideByThree = steps[i/3]
        minChoice = Math.min(divideByThree, minChoice); 
        console.log("/3: ",divideByThree)
      }
  
    steps[i] = minChoice + 1;
    }
    return steps[n]; 
  }

  console.log(minStepstoOne(10))
  // console.log(minStepstoOne(1234567))