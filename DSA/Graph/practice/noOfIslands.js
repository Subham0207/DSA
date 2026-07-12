function noOfIslands(grid)
{
    const rows = grid.length;
    const columns = grid[0].length;

    const visited = new Set();
    let islands = 0;

    function dfs(x,y)
    {
        if(x < 0 || y < 0 || x >= rows || y >= columns)
            return false;
        if(visited.has(`${x}-${y}`))
            return false;

        visited.add(`${x}-${y}`);
        
        if(grid[x][y] === '0')
            return false;
        
        dfs(x+1,y);
        dfs(x,y+1);
        dfs(x-1,y);
        dfs(x,y-1);

        return true;
    }

    for(let i = 0;i<rows;i++)
    {
        for(let j =0;j<columns;j++)
        {
            if(dfs(i,j))
                islands++;
        }
    }

    return islands;
}

const islands = noOfIslands(
    [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
);

console.log('No. of islands: ', islands);
