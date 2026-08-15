var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    // Already sorted, so first element is minimum.
    if(nums[l] < nums[r]) return nums[l];

    // This is important when l,r,m are at same point.
    while(l < r)
    {
        const m = Math.floor((l+r)/2);
        //We are essentially comparing ranges if l to m is sorted or m to r is sorted. One half is always sorted.
        //In rotated sorted array checking if Right < middle (mid is greater than r).
        //Since that is where the small lies.
        // [3, 4, 5, 1, 2]
        //        M     R
        if(nums[r] < nums[m])
        {
            l = m + 1; // m definitely isn't answer because elem at m larger than r.
        }
        else
        {
            // [4, 5, 1, 2, 3]
            //        M     R 
            // else is nums[r] > nums[m]; meaning m to r is sorted. elem at m being the smallest.
            // so global min is either m or in left part
            r = m;
        }
    }

    return nums[l];
};

const result = findMin([3,4,5,1,2])
console.log("Result: ", result)