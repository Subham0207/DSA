// multi source BFS
// all the nodes in BFS queue are executed in the same loop.
// bfs queue always contains rotten oranges so we traverse it in same tick.

function rottingOranges(grid)
{
    const rows = grid.length;
    const columns = grid[0].length;
    const queue = []
    let fresh = 0;
    let timeToRot = 0;

    for(let i =0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(grid[i][j] === 2) // rotting oranges
            {
                queue.push([i,j]);
            }

            if(grid[i][j] === 1)
            {
                fresh++;
            }
        }
    }
    
    const directions = [[-1,0],[1,0],[0,-1],[0,1]];

    while(queue.length > 0)
    {
        let spread = false;
        let queueLength = queue.length;
        for(let i=0;i<queueLength;i++)
        {
            const [r,c] = queue.shift();
            for(let [dr,dc] of directions)
            {
                const nextR = r + dr;
                const nextC = c + dc;

                if(nextR >= 0 && nextC >= 0 && nextR < rows && nextC < columns
                    && grid[nextR][nextC] === 1
                )
                {
                    grid[nextR][nextC] = 2;
                    queue.push([nextR,nextC]);
                    fresh--;
                    spread = true;
                }
            }
        }
        
        queueLength = queue.length;
        spread && timeToRot++;
    }

    return fresh === 0 ? timeToRot: -1;

}


const result = rottingOranges(
    [[1,1,0],[0,1,1],[0,1,2]]
)
console.log("Time to rot", result);