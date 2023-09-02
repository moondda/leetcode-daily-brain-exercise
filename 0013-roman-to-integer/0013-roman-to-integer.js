/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let symbol = { 
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };

    let sum = 0;
    let temp = s[0];
    let cur;

    for(let i = 0 ; i < s.length; i++) {
        cur = symbol[s[i]];

        if(temp - cur < 0) {
            sum = sum - temp + (cur - temp);
        }
        else {
            temp = cur;
            sum += temp;
        }


    }

    return sum;



};