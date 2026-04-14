var maxProfit = function(prices) {
    //Diff b/w two number to be max...
    let l = 0;
    let best = 0;
    for(let r = 0;r < prices.length;r++)
    {
        console.log(`${prices[l]} ${prices[r]}`);
        console.log(prices[r] - prices[l]);
        while(prices[r] - prices[l] < 0)
        {
            l++;
        }
        best = Math.max( best, (prices[r] - prices[l]));
    }

    return best;
};

const result = maxProfit([7,1,5,3,6,4]);
const result2 = maxProfit([7,6,4,3,1]);
console.log("Result: ", result);
console.log("Result2: ", result2);