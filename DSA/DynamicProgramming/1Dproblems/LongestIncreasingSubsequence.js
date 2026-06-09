function LIS(nums)
{
    const memo = new Map();
    function dfs(i)
    {
        if(i === nums.length) return 0;
        if(memo.has(i)) return memo.get(i);
        let max = 1;
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[j] > nums[i])
                max = Math.max(max, dfs(j) + 1);
        }
        memo.set(i, max);
        return max;
    }

    let max = 0;
    for(let i=0;i<nums.length;i++)
    {
        max = Math.max(max, dfs(i));
    }

    return max;
}

console.log(LIS([9,1,4,2,3,3,7]))