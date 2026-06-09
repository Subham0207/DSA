function wordbreak(s,wordDict)
{
    const memo = new Map();
    function dfs(start)
    {
        if(start === s.length) return true;
        if(memo.has(start)) return memo.get(start);
        for(let end=start+1;end<=s.length;end++)
        {
            if(wordDict.includes(s.slice(start,end)) && dfs(end))
            {
                memo.set(start, true);
                return true;
            }
        }
        memo.set(start, false);
        return false;
    }
    return dfs(0);
}

console.log(wordbreak('neetcode', ['neet','code']));