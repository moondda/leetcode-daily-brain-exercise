/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {

    let str = Math.min(...strs.map((str) => str.length));
    let output = "";

    for(let i = 0 ; i < str; i++) {
        for (let j = 0 ; j < strs.length; j++) {
            if(strs[0][i] != strs[j][i]) return output;
        }
        output += strs[0][i];
    }


    return output
 
  
};