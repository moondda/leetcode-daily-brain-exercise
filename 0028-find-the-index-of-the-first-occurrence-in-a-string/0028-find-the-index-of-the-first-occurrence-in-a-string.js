/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let isTrue;
    for(let i = 0; i<haystack.length; i++) {
        isTrue = true;
        if(needle[0] == haystack[i]) {
            for(let j=0; j<needle.length; j++) {
                if(needle[j] != haystack[i+j]) isTrue = false;
            }
            if(isTrue == true) return i;
        }
    }
    return -1;
};