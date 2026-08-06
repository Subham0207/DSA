// Question: arr is sorted in asc; 
// Need to return k elements which satisfy Math.abs(a - x) <= Math.abs(b - x)
// the result should also be sorted.

// solution: the fact that the arr is sorted and result is also sorted
// Only sliding window can implment this in O(n) time complexity.
// start l at 0 and r at arr.length - 1
// arr = [1,2,3,4,5], k = 4, x = 3
// diff= [2,1,0,1,2], l = 0 and r = 4, k = 5
// iter1: r--, l=0,r=3, k = 4 <-- Answer i.e. [1,2,3,4]


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