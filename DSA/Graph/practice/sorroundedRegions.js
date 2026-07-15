function sorroundedRegions(board)
{
    const rows = board.length;
    const columns = board[0].length;

    function dfs(r,c,visited, orignalChar, replacedBy)
    {
        if(r<0||c<0||r===rows||c===columns||visited.has(`${r}-${c}`) || board[r][c] !== orignalChar)
            return;
        
        if(board[r][c] === orignalChar)
            board[r][c] = replacedBy;

        visited.add(`${r}-${c}`)

        dfs(r+1,c,visited);
        dfs(r-1,c,visited);
        dfs(r,c+1,visited);
        dfs(r,c-1,visited);
    }

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(i ===0 || j === 0 || i === rows-1 || j===columns-1)
                dfs(i,j,new Set(),'O','T')
        }
    }

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            dfs(i,j,new Set(),'O','X')
        }
    }
    
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            dfs(i,j,new Set(),'T','O')
        }
    }

    return board;
}

const result = sorroundedRegions([
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]);

console.log("Answer: ", result);