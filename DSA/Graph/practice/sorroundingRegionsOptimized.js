function solve(board) {
        let rows = board.length;        
        let columns = board[0].length;

        function dfs(r,c, updateFrom, updateTo)
        {
            let stack = [[r,c]]
            while(stack.length)
            {
                let [row,col] = stack.pop();
                if(row < 0 || row > rows - 1 || col  < 0 || col > columns - 1 ||
                board[row][col] !== updateFrom)
                {
                    continue
                }

                if(board[row][col] === updateFrom) // no need to visited set as updating inplace
                    board[row][col] = updateTo;

                stack.push([row+1,col]);
                stack.push([row-1,col]);
                stack.push([row,col+1]);
                stack.push([row,col-1]);
            }
        }

        for(let i=0;i<rows;i++)
        {
            for(let j=0;j<columns;j++)
            {
                if(i === 0 || i === rows - 1 || j === 0 || j === columns -1)
                    dfs(i,j,'O','T');
            }
        }

        for(let i=0;i<rows;i++)
        {
            for(let j=0;j<columns;j++)
            {
                dfs(i,j,'O','X');
            }
        }

        for(let i=0;i<rows;i++)
        {
            for(let j=0;j<columns;j++)
            {
                dfs(i,j,'T','O');
            }
        }

        return board;
}

console.log(solve([
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]));