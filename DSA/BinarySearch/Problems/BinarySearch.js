//Input array is sorted...
// 1 2 3 4 5
function binarySearch(nums, target)
{
    let l = 0;
    let r = nums.length - 1;

    while (l <= r)
    {
        let mid = Math.floor((l + r)/2); // l + (r-l)/2 => start distance + diff in distance / 2=> (l + r)/2 
        if(nums[mid] > target)
        {
            r = mid - 1;
        }
        else if(nums[mid] < target)
        {
            l = mid + 1;
        }
        else
        {
            return mid;
        }
    }
}

const result = binarySearch([-1,0,3,5,9,12], 9)

console.log("Result: ", result);