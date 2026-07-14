function islandsAndTreasure(grid)
{
    const rows = grid.length;
    const columns = grid[0].length;
    const queue = [];

    // start BFS from all the treasure nodes
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(grid[i][j] === 0)
                queue.push([i,j]);
        }
    }

    const direction = [[-1,0],[1,0],[0,-1],[0,1]];

    while(queue.length  > 0 )
    {
        const [r,c] = queue.shift();

        for(let [dr, dc] of direction)
        {
            const nextR = r + dr;
            const nextC = c + dc;

            if(x >= 0 && y >=0 && x < rows && y < columns &&
                grid[nextR][nextC] === 2147483647
            )
            {
                grid[nextR][nextC] = grid[r][c] + 1;
                queue.push([nextR, nextC]);
            }
        }
    }

    return grid;
}