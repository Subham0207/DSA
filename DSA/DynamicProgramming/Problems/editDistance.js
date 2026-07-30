// insert: insert j at i and compare j+1 to i, i.e., dfs(i,j+1) 
// delete: essentially compare next i to current j, i.e., dfs(i+1,j)
// replace: after replaceing move onto next char dfs(i+1,j+1)

function editDistance(word1, word2)
{
    const memo = new Map();
    function dfs(i,j)
    {
        if(i >= word1.length)
            return word2.length - j;// characters left in word2

        if(j >= word2.length)
            return word1.length - i;// characters left in word1

        const key = `${i}-${j}`
        if(memo.has(key)) return memo.get(key);
        
        if(word1[i] === word2[j])
        {
            const res = dfs(i+1,j+1);
            memo.set(key, res);
            return res;
        }
        const res = 1 + Math.min(
            dfs(i,j+1), // insert
            dfs(i+1,j), // delete
            dfs(i+1,j+1) // replace
        )
        memo.set(key, res);
        return res;
    }

    return dfs(0,0);
}

console.log(editDistance("monkeys", "money"));