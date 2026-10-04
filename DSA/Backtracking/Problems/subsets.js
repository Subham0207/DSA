function subsets(nums)
{
    const result = [];
    const subset = [];
    function dfs(i)
    {
        if(i === nums.length)
        {
            result.push([...subset]);
            return;
        }
        // include i
        subset.push(nums[i])
        dfs(i+1);

        // not include i
        subset.pop();
        dfs(i+1);
    }

    return dfs(i);
}

subsets([1,2,3]);


// 1
// 1,2
// 1,2,3

//2
//2,3

//3