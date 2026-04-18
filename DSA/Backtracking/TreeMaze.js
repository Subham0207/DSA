//Recurssion, Backtracking, And stack data structure

const maze = [
    [1,0,1,1,0],
    [1,1,1,0,1],
    [0,1,0,1,1],
    [1,1,1,1,1],
];

const foodCoordX = 2;
const foodCoordY = 3;

const currLocX = 0;
const currLocY = 0;

const mazeSize = maze[0].length;

//When rat is attempting to find the food we update this array.
//Also this is the actual path found stored in array. Which is why we are setting cells to false if cell is deadend.
let visited = new Array(mazeSize);

for (let i = 0; i < mazeSize; i++) {
    // Fill each row with an array of 'mazeSize' columns, all set to false
    visited[i] = new Array(mazeSize).fill(false);
}

function pathing(currX, currY)
{
    //out of bound return false.
    if(currX < 0 || currY < 0 || currX > mazeSize - 1 || currY > mazeSize - 1)
        return false;

    //if obstable return false.
    if(maze[currY][currX] === 0)
        return false;

    //if loc found return true.
    if(currX === foodCoordX && currY === foodCoordY)
    {
        return true;
    }

    if(visited[currY][currX] == true)
    {
        return false;
    }

    visited[currY][currX] = true;
    
    if( pathing(currX, currY - 1) || 
    pathing(currX, currY + 1) || 
    pathing(currX - 1, currY) || 
    pathing(currX + 1, currY))
    {
        return true;
    }
    
    //We did not find the path through this cell.
    //Set this cell visit to false since we are backtracking the previous cell.
    visited[currY][currX] = false;
    return false;
}


console.log(pathing(0,0));