// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, 
// and it should return false if every element is distinct.

var containsDuplicate = function (nums) {
  nums.sort(function (a, b) { return a - b })
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums.length == 0) {
      console.log('length 0')
      return false
    } else if (nums[i] == nums[i+1]) {
      console.log('nums i:', nums[i])
      return true
    }
  }
  return false
};

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
// console.log(containsDuplicate([1, 4, 3, 2]))
// console.log(containsDuplicate([2, 14, 18, 22, 22]))
// console.log(containsDuplicate([]))

var containsDuplicates = function (nums) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++){
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = true;
      console.log(hashMap);
    } else {
      return true;
    }
  }
  return false
};

console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(containsDuplicates([1, 4, 3, 2]))
console.log(containsDuplicates([2, 14, 18, 22, 22]))
console.log(containsDuplicates([]))