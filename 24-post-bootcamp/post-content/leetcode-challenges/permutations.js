var permute = function (nums) {
  // return an empty array if nums contains no values
  if (nums.length === 0) {
    return [[]];
    // when nums is a single number, return that value
  } else if (nums.length === 1) {
    return [[nums[0]]];
  }
  // create an empty array to hold any/all permutations
  let permArr = [];
  // loop through initial array to get the first digit for a new array
  for (let i = 0; i < nums.length; i++) {
    let copy = [...nums]; // create a copy of nums for which i can be removed
    copy.splice(i, 1);
    let temp = permute(copy); // recursion on copy (which has i removed)
    for (let j = 0; j < temp.length; j++) {
      permArr.push([nums[i], ...temp[j]])
    }
  }
  return permArr;
};

console.log(permute([1, 2, 3]))