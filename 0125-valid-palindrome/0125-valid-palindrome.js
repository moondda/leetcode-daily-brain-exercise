/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //Alphanumeric characters include letters and numbers.
    if(s.length < 2) return true;
    s= s.toLowerCase();
    let s_arr = s.split("");
    s_arr = s_arr.filter(e => (e.charCodeAt() > 96 && e.charCodeAt() < 123) ||(e.charCodeAt() > 47 && e.charCodeAt() < 58) );
    //영어 소문자는 97번부터 122번까지이다
    //숫자는 48부터 57번까지다

    let length = (s_arr.length % 2 == 0) ? s_arr.length/2 : s_arr.length/2 -1;

    for(let i = 0; i < length; i++) {
        if(s_arr[i] != s_arr[s_arr.length-1-i]) return false;
    }
    return true;
};