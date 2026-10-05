// given a matrix, calculate total water logged in crevices.

let arr = [
    [1,8,3,4],
    [7,2,3,5],
    [1,8,3,6]
];


function trapRainWaterInaMatrix(grid)
{
    let rows = grid.length;
    let columns = grid[0].length;

    let queue = []; // [[height, r, c]]
    let visited = new Set();
    let directions = [[1,0],[-1,0],[0,-1],[0,1]];
    let water = 0;

    //add all boundary cells
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            if(i === 0 || i === rows - 1 || j === 0 || j === columns -1)
                queue.push([grid[i][j], i,j]);
        }
    }

    while(queue.length)
    {
        queue.sort((a,b) => a[0] - b[0]);

        let [h,r,c] = queue.shift();

        if(visited.has(`${r}-${c}`)) continue;
        visited.add(`${r}-${c}`);

        for(let [dr,dc] of directions)
        {
            let nextR = r + dr;
            let nextC = c + dc;

            if(nextR >= 0 && nextR < rows && nextC >= 0 && nextC < columns && !visited.has(`${nextR}-${nextC}`))
            {
                let neighbourHeight = grid[nextR][nextC];
                if(neighbourHeight < h)
                {
                    water += h - neighbourHeight;
                }

                queue.push([
                    Math.max(h, neighbourHeight),
                    nextR,
                    nextC
                ])
            }
        }
    }

    return water;
}

console.log(trapRainWaterInaMatrix(arr));