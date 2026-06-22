class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const columns = board[0].length;

        // we pass an index upto where we matched the word
        function backtrack(x,y, index)
        {
            if(index === word.length)
                return true;
            
            if(x >= rows || y >= columns || x < 0 || y < 0 || board[x][y] !== word[index])
            {
                return false;
            }

            const originalchar = board[x][y];
            board[x][y] = '#';

            const result = backtrack(x + 1, y, index + 1) ||
            backtrack(x - 1, y, index + 1) ||
            backtrack(x, y + 1, index + 1) ||
            backtrack(x, y - 1, index + 1);

            board[x][y] = originalchar;

            return result;
        }

        for(let i = 0;i<rows;i++)
        {
            for(let j = 0;j<columns;j++)
            {
                if(board[i][j] === word[0] && backtrack(i,j,0))
                {
                    return true;
                }
            }
        }

        return false;
    }
}
