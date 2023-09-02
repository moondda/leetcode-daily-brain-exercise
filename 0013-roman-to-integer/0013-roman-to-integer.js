/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let symbol = [ "I", "V", "X", "L", "C", "D", "M"];
    let value = [1, 5, 10, 50, 100, 500, 1000];
    //IV, IX, XL, XC, CD, CM
    let sum = 0;
    let temp = s[0];

    for(let i = 0 ; i < s.length; i++) {

        if(temp - value[symbol.indexOf(s[i])] < 0) {
            sum = sum - temp + (value[symbol.indexOf(s[i])] - temp);
        }
        else {
            temp = value[symbol.indexOf(s[i])];
            sum += temp;
        }


    }

    return sum;



};