function minimumSubArraySum(target, nums)
{
    let l = 0;
    let minLength = Infinity;
    let total = 0;
    for(let r=0;r<nums.length;r++)
    {
        total += nums[r];
        while(total >= target)
        {
            minLength = Math.min(minLength, r-l+1);
            total -= nums[l];
            l++;
        }
    }

    return minLength;
}

console.log(maximumSubArraySum(10, [2,1,5,1,5,3]));