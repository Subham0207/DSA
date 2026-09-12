function isValidSudoko(board)
{
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const squares = new Map(); // Using Map for clean key-value tracking

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val === '.') continue;

            const squareKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

            // Initialize the subgrid Set if it hasn't been created yet
            if (!squares.has(squareKey)) {
                squares.set(squareKey, new Set());
            }

            // Check for duplicates
            if (
                rows[r].has(val) ||
                cols[c].has(val) ||
                squares.get(squareKey).has(val)
            ) {
                return false;
            }

            // Record the value
            rows[r].add(val);
            cols[c].add(val);
            squares.get(squareKey).add(val);
        }
    }

    return true;
}

console.log(isValidSudoko(
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]
));