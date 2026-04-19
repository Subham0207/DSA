// 15 question on Longest common subsequence.

const str1 = "AGGTAB";
const str2 = "GXTXAYB";

function lcs(n,m)
{
    if(n == 0 || m == 0)
        return 0;

    if(str1[n-1] === str2[m-1])
    {
        return lcs(n-1, m-1) + 1;
    }
    else
    {
        return Math.max(lcs(n-1,m), lcs(n,m-1));
    }
}

console.log(lcs(str1.length, str2.length));