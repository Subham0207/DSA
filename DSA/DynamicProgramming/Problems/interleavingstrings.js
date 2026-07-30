// solution:
// in an interleaving string: s[i] || s2[j] === s3[i+j]

function interleavingStrings(s1,s2,s3)
{
        if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const memo = new Map();
    function dfs(i,j)
    {
        if(i >= s1.length && j >= s2.length)
                return true;
        let key = `${i}-${j}`;
        if(memo.has(key)) return memo.get(key);
        if(i < s1.length && s1[i] === s3[i+j] && dfs(i+1, j))
            return true;
        if(j < s2.length && s2[i] === s3[i+j] && dfs(i,j+1))
            return true

        memo.set(key, false);
        return false;
    }

    return dfs(0,0);
}

console.log(interleavingStrings("abc", "xyz", "abxzcy"));