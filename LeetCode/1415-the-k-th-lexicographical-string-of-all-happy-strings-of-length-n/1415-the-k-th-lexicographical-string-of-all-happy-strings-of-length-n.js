/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 //12시 45분
var getHappyString = function(n, k) {
    let dp = Array(n+1).fill(0);

    for(let i=1; i<=n ; i++) {
        dp[i] = 2**(i-1) + 2**(i-1) + 2**(i-1);
    }

    let leftOrder = k;
    const result = [];

    if(leftOrder > dp[n]) {
        return '';
    }

    if(leftOrder <= dp[n]/3) {
        result.push('a')
    }
    else if(leftOrder <= (2* dp[n])/3) {
        result.push('b');
        leftOrder -= dp[n]/3;
    }
    else {
        result.push('c');
        leftOrder -= (2*dp[n])/3;
    }

    let leftLetter = n - 1;
    const letterMap = {'a': ['b','c'], 'b': ['a','c'], 'c': ['a','b']};

    for(let i= leftLetter; i>0 ; i--) {
        if(leftOrder <= 2 ** (i-1) ) {
            result.push(letterMap[result.at(-1)][0]);
        }
        else {
            result.push(letterMap[result.at(-1)][1]);
            leftOrder -= 2 ** (i-1) ;
        }
    }

    return result.join("")
};