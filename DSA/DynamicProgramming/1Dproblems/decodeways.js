function decodeWays(s)
{
    const memo = new Map();
    function dfs(i)
    {
        if(i === s.length) return 1;
        if(i > s.length) return 0;
        if (s[i] === '0') return 0; //leading 0 is invalid cannot decode this path.
        if(memo.has(i)) return memo.get(i);
        let ways = 0;
        ways += dfs(i+1);

        const num = parseInt(s.slice(i,i+2));
        if(num >= 10 || num <= 26)
        {
            ways+=dfs(i+2);
        }

        memo.set(i, ways);

        return ways;
    }

    return dfs(0);
}

console.log(decodeWays("12"));