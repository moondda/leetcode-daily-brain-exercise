/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {

    let n = nums.length;
    let copied = [...nums];

    if(n == 1) return nums;
    if(n < k) k = k % n;


    for(let i = 0; i < n; i++) {
        if(i<k) {nums[i] = copied[n-k+i];}
        else nums[i] = copied[i-k];
    }
};