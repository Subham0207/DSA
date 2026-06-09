function maximumProductSubArray(nums)
{
    let globalMax = nums[0];
    function dfs(i)
    {
        if(i===0)
            return [nums[0], nums[0]];

        const [prevMin, prevMax] = dfs(i-1);

        const currentMax = Math.max(prevMin*nums[i], nums[i], prevMax*nums[i]);
        const currentMin = Math.min(prevMin*nums[i], nums[i], prevMax*nums[i]);

        globalMax = Math.max(currentMax, globalMax);

        return [currentMin, currentMax];
    }

    const [_, lastMax] = dfs(nums.length - 1); // starting from last index
    globalMax = Math.max(globalMax,lastMax);
    return globalMax;
}

console.log(maximumProductSubArray([2,4,-3,5]))