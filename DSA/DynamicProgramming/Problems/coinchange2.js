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

console.log(coinChange([1,2,5], 5));