/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let valid = s[0];
    //중간이 있을때 aba
    for(let i=1;i<s.length-1;i++){
        let left = i-1;
        let mid = i;
        let right = i+1;
        while(s[left] === s[right]) {
            let target = s.slice(left,right+1);
            if(target.length > valid.length) valid = target;
            if(left-1 < 0 || right+1 > s.length-1) break;
            left = left-1;
            right = right+1;
        }
    }

    //중간이 없을때 abba
    for(let i=0;i<s.length-1;i++){
        let left = i;
        let right = i+1;
        while(s[left] === s[right]) {
            let target = s.slice(left,right+1);
            if(target.length > valid.length) valid = target;
            if(left-1 < 0 || right+1 > s.length-1) break;
            left = left-1;
            right = right+1;
        }
    }
    return valid;
};