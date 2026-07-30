// Soluton:
// strings are matching if we reach the base case
// if current i and current j matches
//   - use matching char + skip matching char (i+1,j)
// if current i and current j does not match
//   - check next match (i+1,j)

function distinctSubSequence(s,t)
{
    const memo = new Map();
    function dfs(i,j)
    {
        if(j !== t.length && i === s.length)
            return 0;
        if(j === t.length)
            return 1;

        const key =`${i}-${j}`;

        let matches = 0;
        if(s[i] === t[j])
        {
            matches += dfs(i+1, j+1) + dfs(i+1,j);
        }
        else
        {
            matches += dfs(i+1,j);
        }
        memo.set(key, matches);
        return matches;
    }
}