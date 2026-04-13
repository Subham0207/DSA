//Struggled: Yes

function searchA2DMatrix(mat, target)
{
    let rowFirst = 0;
    let rowLast = mat.length - 1;
    let middleRow = 0

    while(rowFirst <= rowLast)
    {
        middleRow = rowFirst + Math.floor((rowLast - rowFirst)/2)
        
        const lastValInRow = mat[middleRow][mat[middleRow].length - 1];
        const firstValInRow = mat[middleRow][0];

        if (target < firstValInRow) {
            rowLast = middleRow - 1;
        } else if (target > lastValInRow) {
            rowFirst = middleRow + 1;
        } else {
            // Target is within this row's range
            break;
        }       
    }

    if(rowFirst > rowLast)
    {
        console.log("RowFirst, RowLast", rowFirst, rowLast);
        return false;
    }

    let l = 0;
    let r = mat[0].length -1;
    while(l<=r)
    {
        const m = Math.floor((l+r)/2); // (l  + (r - l)/2)
        if(mat[middleRow][m] > target)
        {
            r = m - 1;
        }
        else if(mat[middleRow][m] < target)
        {
            l = m + 1;
        }
        else{
            return true;
        }
    }
}

const total = searchA2DMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
console.log("Total: ", total);