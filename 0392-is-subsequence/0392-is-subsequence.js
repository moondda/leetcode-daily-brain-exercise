/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let output = "";
    let temp = -1;//Temp 값 0에서 -1로 변경 
    for(let i = 0 ; i < s.length; i++) {
        for(let j = temp+1; j< t.length; j++) {
            if(s[i] == t[j]) {temp = j; output += s[i]; break;}
        }
    }
    return (output == s) ? true : false;
};