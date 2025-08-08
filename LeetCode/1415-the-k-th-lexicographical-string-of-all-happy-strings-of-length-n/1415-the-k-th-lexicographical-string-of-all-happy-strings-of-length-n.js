/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 //12시 45분
var getHappyString = function(n, k) {
    let dp = Array(n+1).fill(0);
    for(let i=1; i<= n ; i++) {
        dp[i] = 2**(i-1) + 2**(i-1) + 2**(i-1);
    }
    let leftOrder = k;
    let leftLetterCount = n;
    let result = [];

    const isA = dp[leftLetterCount] / 3;
    const isB = (2* dp[leftLetterCount]) / 3;

    if(dp[leftLetterCount] < k) {
        return '';
    }
    console.log(isA,leftOrder,dp,isB)
    if(leftOrder <= isA) {
            result.push('a');
        }
    else if(leftOrder <= isB) {
            leftOrder -= isA;
            result.push('b');
        }
    else {
            leftOrder -= isB;
            result.push('c');
        }
    leftLetterCount -= 1;

    const abcMap = {'a' : ['b','c'] , 'b' : ['a','c'] , 'c' : ['a','b']};

    while(leftLetterCount > 0) {
        const is1 =  2 **(leftLetterCount-1);
        const prev = result.pop();
        result.push(prev);

        if(leftOrder <= is1) {
            result.push(abcMap[prev][0]);
        }
        else {
            leftOrder -= is1;
            result.push(abcMap[prev][1]);
        }
        leftLetterCount -= 1;
    }

    return result.join('');
};