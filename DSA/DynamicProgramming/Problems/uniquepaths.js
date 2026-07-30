function uniquePath(m,n)
{
    const memo = new Map();
    function dfs(r,c)
    {
        if(r < 0 || c < 0 || r === m || c === n)
            return 0;
        if(r === m -1 && c === n-1)
            return 1;
        const key = `${r}-${c}`;
        if(memo.has(key)) return memo.get(key);
        const total = dfs(r+1,c) + dfs(r,c+1);
        memo.set(key, total);
        return total;
    }

    return dfs(0,0);
}

console.log(uniquePath(3,6));
console.log(uniquePath(3,3));