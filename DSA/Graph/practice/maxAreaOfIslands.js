function maxAreaOfIslands(grid)
{
    const rows = grid.length;
    const columns = grid[0].length;

    const visited = new Set();

    function dfs(x,y)
    {
        if(x < 0 || y < 0 || x >= rows || y >= columns)
            return 0;
        if(visited.has(`${x}-${y}`))
            return 0;
        
        visited.add(`${x}-${y}`);
        if(grid[x][y] === 0)
            return 0
        
        return dfs(x+1,y) + dfs(x,y+1) + dfs(x-1,y) + dfs(x,y-1) + 1;
    }

    let maxArea = 0;
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            maxArea = Math.max(maxArea, dfs(i,j));            
        }
    }

    return maxArea;
}

const maxArea = maxAreaOfIslands(
[
  [0,1,1,0,1],
  [1,0,1,0,1],
  [0,1,1,0,1],
  [0,1,0,0,1]
]
);
console.log('Max area: ', maxArea);