// Question: arr is sorted in asc; 

// solution: still do not understand it.

function FindKClosestElements(arr, k, x)
{
    let l = 0;
    let r = arr.length - 1;
    while(r-l+1 > k)
    {
        if(Math.abs(arr[l]-x) > Math.abs(arr[r]-x))
        {
            l++;
        }
        else
        {
            r--;
        }
    }

    return arr.slice(l,r+1);
}

console.log(FindKClosestElements([2,4,5,8], 2, 6))