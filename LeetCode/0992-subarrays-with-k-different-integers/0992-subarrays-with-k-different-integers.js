/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    const atMost = (target) => {

        let left = 0;
    const countMap = new Map();
    let res = 0;

    for(let i=0; i<nums.length; i++) {
        countMap.set(nums[i] , (countMap.get(nums[i]) || 0) + 1);

        while(countMap.size > target) {
            //k가 될때까지 left 조정
            countMap.set(nums[left] , countMap.get(nums[left]) - 1);
            if(countMap.get(nums[left]) == 0) countMap.delete(nums[left]);
            left += 1;
        }

        res += (i-left+1);

    }

    return res;
    }

    return (atMost(k) - atMost(k-1))

};