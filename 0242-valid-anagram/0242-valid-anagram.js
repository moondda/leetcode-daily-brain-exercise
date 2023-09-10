/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s_arr = s.split("");
    let t_arr = t.split("");
    s_arr.sort();
    t_arr.sort();
    s = s_arr.join("");
    t = t_arr.join("");
    
    return (s==t) ? true : false;
};