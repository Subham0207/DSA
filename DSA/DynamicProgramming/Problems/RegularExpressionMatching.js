// Solution:
// 1. match = current character match or current pattern is "."
// 2. next pattern char is a "*"
//    - Don't use *, going with empty "" pattern match, => dfs on current string char and +2 pattern char.
//    - Use * => compare * with more string chars, dfs on next string char and keep j current.

function regularExpressionMatching(s,p)
{  
    const memo = new Map();
    function dfs(i,j)
    {
        if(i >= s.length && j >= p.length) // both i and j out of bounds
            return true;
        if(j >= p.length) // j out of bounds but there are more string chars
            return false;

        const key = `${i}-${j}`;
        if(memo.has(key)) return memo.get(key);
        
        const match = i < s.length && (s[i] === p[j] || p[j] === '.')
        if(j+1 < p.length && p[j+1] === '*')
        {
            const res = dfs(i,j+2) || dfs(i+1,j);
            memo.set(key, res);
            return res;
        }
        if(match)
        {
            const res = dfs(i+1,j+1);
            memo.set(key, res);
            return res;
        }
        memo.set(key, false);
        return false;
    }

    return dfs(0,0);
}

console.log(regularExpressionMatching("aa", ".b"));
console.log(regularExpressionMatching("nnn", "n*"));
console.log(regularExpressionMatching("xyz", ".*z"));