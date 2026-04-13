//Input array is sorted...

function binarySearch(nums, target)
{
    let l = 0;
    let r = nums.length - 1;

    while (l <= r)
    {
        let m = r + Math.floor((l - r)/2)
        if(nums[m] > target)
        {
            r = m - 1;
        }
        else if(nums[m] < target)
        {
            l = m + 1;
        }
        else
        {
            return m;
        }
    }
}

const result = binarySearch([-1,0,3,5,9,12], 9)

console.log("Result: ", result);