// Solution:
// 1. if current i and j are same. Check next i and next j + this 1.
// 2. else max of next i and current j or  current i and next j

function lcs(t1, t2)
{
    function dfs(i,j)
    {
        if(i === t1.length || j === t2.length)
            return 0;

        let total = 0;
        if(t1[i] === t2[j])
        {
            total += dfs(i+1,j+1) + 1;
        }
        else
        {
            total += Math.max(dfs(i+1,j), dfs(i,j+1));
        }

        return total;
    }

    return dfs(0,0);
}

console.log(lcs("AGGTAB", "GXTXAYB"));