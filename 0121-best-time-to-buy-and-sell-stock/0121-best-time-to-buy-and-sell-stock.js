/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let min = prices[0];
    let max = 0;
    let length = prices.length;

    if(length == 2) return (prices[1]-prices[0] > 0) ? prices[1]-prices[0] : 0;

    for(let i = 0 ; i < length; i++) {

        min = (min > prices[i]) ? prices[i] : min;
        max = (max < prices[i]-min) ? prices[i]-min : max;
    
    }

     return max;
    
};