function searchInRotatedSortedArray(arr, target)
{

    // Important: In rotated sorted array, at least one half is always sorted.
    // This is why our solution works.

    let l = 0;
    let r = arr.length - 1;
    while(l <= r )
    {
        let m = Math.floor((l+r)/2);

        if(arr[m] === target)
            return m;

        // left half is sorted
        if(arr[l] <= arr[m])
        {
            if(target >= arr[l] && target < arr[m]) // target lies b/w l and m
            {
                r = m - 1;
            }
            else
            {
                l = m + 1; //discard l to m
            }
        }
        else
        {
            //right have is sorted
            if(target > arr[m] && target <= arr[r]) // target lies b/w l and m
            {
                l = m + 1;
            }
            else
            {
                r = m - 1; // discard m to r
            }
        }
    }

    return -1;
}

console.log(searchInRotatedSortedArray([3,5,6,0,1,2], 0));