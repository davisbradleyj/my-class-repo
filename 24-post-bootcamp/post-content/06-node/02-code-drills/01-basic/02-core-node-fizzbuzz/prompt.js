
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
var nums = []
for (let i=1; i<=n; i++) {
    nums.push(i)
}
for (let i=0; i<nums.length; i++){
    if (nums[i] % 3 === 0 & nums[i] % 5 === 0) {
        console.log("fizzbuzz")
    }
    else if (nums[i] % 3 === 0) {
        console.log("fizz")
    }
    else if (nums[i] % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(nums[i])
    }
}
// ==========================================================
  
}

fizzBuzz(process.argv[2])

