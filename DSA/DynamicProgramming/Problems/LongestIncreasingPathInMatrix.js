var longestIncreasingPath = function(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const memo = new Map();

    function dfs(r,c,preVal)
    {
        if(r < 0 || c < 0 || r === rows || c === columns ||
            matrix[r][c] <= preVal
        )
            return 0;
        
        const key = `${r}-${c}`;
        if(memo.has(key)) return memo.get(key);
        let res = 1;
        res = Math.max(res, 1 + dfs(r+1,c, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r-1,c, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r,c+1, matrix[r][c]));
        res = Math.max(res, 1 + dfs(r,c-1, matrix[r][c]));
        memo.set(key, res);
        return res;
    }

    let max = 0;
    for(let i =0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            max = Math.max(max, dfs(i,j,-1))
        }
    }

    return max;
};

console.log(longestIncreasingPath([[5,5,3],[2,3,6],[1,1,1]]));