/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let checkLetter = new Set();
    let left = 0;
    let maxLength = 0;


    for(let i=0; i<s.length; i++) {

        while(checkLetter.has(s[i])) {
            checkLetter.delete(s[left]);
            left += 1;
        }
        checkLetter.add(s[i]);
        maxLength = Math.max(maxLength, checkLetter.size)

    }

    return maxLength;
};