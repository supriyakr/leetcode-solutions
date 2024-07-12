/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice= prices[0];
    let maxProfit= 0; // we dont know yet, also if there is no valid max profit(+ve number) it will return 0

    for(let i=0;i<prices.length;i++)
    {
        minPrice= Math.min(minPrice, prices[i]);
        maxProfit= Math.max(maxProfit, prices[i]-minPrice)
    }
    return maxProfit;
};

// time complexity is O(n) and space complexity is O(1)