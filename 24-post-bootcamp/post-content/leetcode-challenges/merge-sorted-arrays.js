// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }
    nums1.sort()
    if (nums1[m] > 0) {
        nums1.splice(0, m)
    }
    return nums1
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// console.log(merge([0], 1, [1], 1))

const merge1 = function(nums1,m,nums2,n) {
    nums1.splice(m,n, ...nums2); // from index m, remove n integers; add nums2 elements to the nums1 array
    console.log(nums1)
    nums1.sort((a,b) => a-b); // ascending sort of nums1
    return nums1
}

console.log(merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge1([0], 1, [1], 1))