function swimInWater(grid) {
        const rows = grid.length;
        const columns = grid[0].length;
        const queue = [[0,0]];
        const visited = new Set();
        let maxHeight = 0;
        while(queue.length > 0)
        {
            queue.sort(([x1,y1],[x2,y2])=> grid[x1][y1] - grid[x2][y2]);
            const [r,c] = queue.shift();

            if (r === rows - 1 && c === columns - 1) {
                return maxHeight;
            }

            if(visited.has(`${r}-${c}`)) continue;
            visited.add(`${r}-${c}`);

            maxHeight = Math.max(maxHeight, grid[r][c]);

            const directions = [[-1,0],[1,0],[0,-1],[0,1]];
            for(let [dr,dc] of directions)
            {
                const nextR = r + dr;
                const nextC = c + dc;
                if(nextR >= 0 && nextC >= 0 && nextR < rows && nextC < columns && !visited.has(`${nextR}-${nextC}`))
                    queue.push([nextR, nextC]);
            }
        }
}

console.log("Answer: ", swimInWater([
  [0,1,2,10],
  [9,14,4,13],
  [12,3,8,15],
  [11,5,7,6]
]));