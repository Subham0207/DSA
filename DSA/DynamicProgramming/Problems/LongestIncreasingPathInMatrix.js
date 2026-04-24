/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [[-1,0], [1,0], [0,1], [0,-1]]
    function dfs(x,y)
    {
        //every node is of length 1.
        let maxLength = 1;
        for(const [dx, dy] of directions)
        {
            const newX = x + dx;
            const newY = y + dy;

            if(newX >=0 && newX < rows && newY >= 0 &&
            newY < cols && matrix[newX][newY] > matrix[x][y])
            {
                maxLength = Math.max(
                    maxLength,
                    1 + dfs(newX, newY) // if there is path 1 will be added.
                )                
            }
        }

        return maxLength;
    }

    let result = 0;
    for(let i = 0; i<rows;i++)
    {
        for(let j = 0;j<cols;j++)
        {
            result = Math.max(result, dfs(i,j))
        }
    }

    return result;
};