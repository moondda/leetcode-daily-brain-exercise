/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    //subarray인데 합이 target 이상인 최소 길이를 return
    //그런게 존재하지 않으면 0 return

    let left = 0;
    let currentLength = 0;
    let currentSum = 0;
    let minimalLength = Infinity;

    for(let i=0; i<nums.length; i++) {

        currentSum += nums[i];
        currentLength += 1;
        
        while(currentSum >= target) {
            minimalLength = Math.min(minimalLength, currentLength);
            currentSum -= nums[left];
            currentLength -= 1;
            left += 1;
        }

    }

    return minimalLength === Infinity ? 0 : minimalLength;


    
};