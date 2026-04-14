var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    if(nums[l] < nums[r]) return nums[l];

    //This is importatnt when l,r,m are at same point.
    while(l < r)
    {
        const m = Math.floor((l+r)/2);
        //In rotated sorted array checking if Right < middle. Since that is where the small lies.
        if(nums[r] < nums[m])
        {
            l = m + 1;
        }
        else
        {
            r = m;
        }
    }

    return nums[l];
};

const result = findMin([3,4,5,1,2])
console.log("Result: ", result)

/*
[3,4,5,1,2], L = 3, R = 2, M = 5
3 < 5 true -> L = 3, R = 4, M = 3
3 <= 3 true -> L = 3, R = 
*/