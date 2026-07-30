function coinChange(array, total)
{
    function dfs(n, amount)
    {
        if( n < 0 || amount < 0)
            return 0;
        if(amount === 0)
            return 1

        const left = dfs(n, amount - array[n]);
        const right = dfs(n-1, amount);

        return left + right;
    }

    return dfs(array.length - 1, total);
}

function coinChangeAnotherWay(array, total)
{
    const memo = new Map();
    function dfs(i, amount)
    {
        if(amount < 0 || i >= array.length)
            return 0;
        if(amount === 0)
            return 1;
        const key = `${i}-${amount}`;
        if(memo.has(key)) return memo.get(key);
        //unlimited coins of each denomination
        const res = dfs(i, amount - array[i]) + dfs(i+1, amount);
        memo.set(key, res);
    }

    return dfs(0, total);
}

console.log(coinChange([1,2,5], 5));