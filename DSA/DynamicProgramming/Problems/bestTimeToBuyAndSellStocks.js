var maxProfit = function(prices) {
    const dp = {};
    function recurse(i, isBuying)
    {
        if(i >= prices.length)
        {
            return 0;
        }

        if(dp[`${i}-${isBuying}`])
        {
            return dp[`${i}-${isBuying}`];
        }

        //cooldown as another choice...
        const cooldownProfit = recurse(i+1, isBuying);
        let profit;
        if(isBuying)
            profit = recurse(i+1, false) - prices[i];
        else
            profit = recurse(i+2, true) + prices[i] // when selling we make isBuying true again for next iteration. cooldown is hte only option.

        dp[`${i}-${isBuying}`] = Math.max(cooldownProfit, profit);
        return dp[`${i}-${isBuying}`]
    }

    return recurse(0, true);
};