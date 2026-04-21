var coinChange = function(coins, amount) {
    d = {};
    function recurse(n, amount)
    {   if( n < 0 || amount < 0)
            return Infinity;
        if(amount === 0)
            return 0;
        if(!d[`${n}-${amount}`])
        {
            d[`${n}-${amount}`] =  Math.min(recurse(n, amount - coins[n]) + 1, recurse(n-1, amount))
        }
        return d[`${n}-${amount}`];
    }
    return recurse(coins.length - 1, amount);
};

console.log(coinChange([1,2,5], 11));