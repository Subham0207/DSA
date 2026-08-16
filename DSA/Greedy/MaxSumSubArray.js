function maxSumSubArray(nums)
{
    let maxSum = -Infinity;
    let currSum = 0;

    for(let num of nums)
    {
        currSum += num;

        maxSum = Math.max(maxSum, currSum);

        if(currSum < 0)
            currSum = 0;
    }

    return maxSum;
}


console.log(maxSumSubArray([2,-3,4,-2,2,1,-1,4]));