/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    const sWindow = (n) => {
        let left = 0;
        let count = 0;
        let numMap = new Map();
        for(let i=0; i<nums.length; i++) {
            numMap.set(nums[i] , (numMap.get(nums[i]) || 0) + 1);

            while(numMap.size > n) {
                if( numMap.get(nums[left]) == 1) {
                    numMap.delete(nums[left]);
                }
                else {
                    numMap.set(nums[left] , numMap.get(nums[left]) - 1);
                }
                left += 1; //윈도우 축소
            }
            count += i-left + 1;
        }
        console.log(numMap)
        return count;
    }
    return sWindow(k)- sWindow(k-1);
};