// Unqiue paths - Each cell has cost associated with it.

//      (Start)
// Row	1 	1	1
// Row	1	2	3
// Row	1	3	6 (Finish)
const grid = [
    [1,1,1],
    [1,2,3],
    [1,3,6],
]

const rows = grid.length;
const columns =grid[0].length;

const memo = Array.from({ length: rows }, () => new Array(columns).fill(-1));

function dp_2D(x,y)
{
    if(x > columns - 1 || y > columns - 1)
    {
        return 0;
    }

    if(x === rows - 1 && y === columns - 1)
    {
        return 1;
    }

    if (memo[x][y] !== -1) return memo[x][y];
    memo[x][y] = dp_2D(x + 1, y) + dp_2D(x, y + 1);

    return memo[x][y];
}

console.log(dp_2D(0,0));
console.log(memo);
