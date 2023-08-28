/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let n = nums.length;  
    let majority = Math.floor(n/2);
    nums.sort();
    let temp = nums[0];
    let count = 0;

    if(nums.length == 1) return temp;
    
    for(let i = 1; i < n; i++) {
        if ( temp == nums[i]) count++;
        else {
            count = 0;
            temp = nums[i];
            }
        if(count >= majority) return temp;
    }

};