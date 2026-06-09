function coinChange(coins, amount)
{
    const memo = new Map();
    function dfs(i,total=0)
    {
        if(total === amount) return 0;
        if (total > amount) return Infinity;
        if(i === coins.length) return Infinity;
        const key = `${i}-${total}`;
        if(memo.has(key)) return memo.get(key);
        const result = Math.min(dfs(i,total + coins[i]) + 1, dfs(i+1,total));
        memo.set(key, result);
        return result;
    }

    const result = dfs(0, 0);
    return result === Infinity ? -1: result;
}

console.log(coinChange([1,5,10],12));