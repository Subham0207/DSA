// use DFS since we need to go deep
// start DFS from Pacific and atlantic oceans and traverse nodes from where water can flow from.
// join both traversals

function pacificAtlanticWater(grid)
{
    const rows = grid.length;
    const columns = grid[0].length;
    const pacificVisited = new Set();
    const atlanticVisited = new Set();

    function dfs(r,c, visited, lastHeight=0)
    {
        if(r < 0 || c < 0|| r === rows || c === columns || visited.has(`${r}-${c}`) || grid[r][c] < lastHeight)
            return;
        
        if(grid[r][c] >= lastHeight)
            visited.add(`${r}-${c}`);

        dfs(r+1,c,visited, grid[r][c]);
        dfs(r-1,c,visited, grid[r][c]);
        dfs(r,c+1,visited, grid[r][c]);
        dfs(r,c-1,visited, grid[r][c]);
    }

    for(let i =0;i<rows;i++)
    {
        for(let j =0;j<columns;j++)
        {
            if(i === 0 || j === 0)
                dfs(i,j, pacificVisited);
            if(i === rows-1 || j === columns-1)
                dfs(i,j, atlanticVisited);
        }
    }

    const result = [];
    for(let i =0;i<rows;i++)
    {
        for(let j =0;j<columns;j++)
        {
            if(pacificVisited.has(`${i}-${j}`) && atlanticVisited.has(`${i}-${j}`))
                result.push([i,j]);
        }
    }

    return result;
}

const result = pacificAtlanticWater([
  [4,2,7,3,4],
  [7,4,6,4,7],
  [6,3,5,3,6]
])

console.log('Answer: ', result);