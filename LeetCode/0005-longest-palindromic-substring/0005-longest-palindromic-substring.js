/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s[0]; 
    let valid = s[0];
    //중간이 있을때 aba
    for(let i=1;i<s.length-1;i++){
        let left = i-1;
        let mid = i;
        let right = i+1;
        while(left >= 0 && right <= s.length -1 && s[left] === s[right]) {
            let target = s.slice(left,right+1);
            if(target.length > valid.length) valid = target;
            left = left-1;
            right = right+1;
        }
    }

    //중간이 없을때 abba
    for(let i=0;i<s.length-1;i++){
        let left = i;
        let right = i+1;
        while(left >= 0 && right <= s.length -1 && s[left] === s[right]) {
            let target = s.slice(left,right+1);
            if(target.length > valid.length) valid = target;
            left = left-1;
            right = right+1;
        }
    }
    return valid;
};