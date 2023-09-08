/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let symbol_s = {};
    let symbol_t = {};

    for(let i = 0 ; i < s.length; i++) {
        if(!(s[i] in symbol_s)) symbol_s[s[i]] = t[i];
        else if((s[i] in symbol_s) && symbol_s[s[i]] != t[i]) return false;
    }
    for(let i = 0 ; i < s.length; i++) {
        if(!(t[i] in symbol_t)) symbol_t[t[i]] = s[i];
        else if((t[i] in symbol_t) && symbol_t[t[i]] != s[i]) return false;
    }

    return true;
    

};