function partitionEqualSubsetSum(nums)
{
    const total = nums.reduce((x,accum)=>accum+=x,0);
    if(total % 2 !== 0)return false;
    const target = total / 2;
    const memo = new Map();
    function dfs(i, currentTarget)
    {
        if(currentTarget === 0) return true;
        if(i === nums.length) return false;
        const key = `${i}-${currentTarget}`;
        if(memo.has(key)) return memo.get(key);
        const result = dfs(i+1, currentTarget - nums[i]) || dfs(i+1, currentTarget);
        memo.set(key, result);
        return result;
    }

    return dfs(0, target);
}


console.log(partitionEqualSubsetSum([1,2,3,4]));