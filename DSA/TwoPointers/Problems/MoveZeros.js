function moveZeros(nums)
{
    let insertPtr = 0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] !== 0)
        {
            [nums[i], nums[insertPtr]] = [nums[insertPtr], nums[i]];
            insertPtr++;
        }
    }

    return nums;
}

console.log(moveZeros([0,0,0,1,1,1,1]))