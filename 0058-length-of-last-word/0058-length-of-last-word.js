/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ").filter((word) => word.length > 0);
    let answer = arr[arr.length-1];

    return answer.length;
};