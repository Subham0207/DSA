class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const subset = [];
        function dfs(i, currentTarget)
        {
            if(currentTarget === 0)
            {
                result.push([...subset]);
                return;
            }

            if( i === nums.length || currentTarget < 0)
            {
                return;
            }

            subset.push(nums[i]);
            dfs(i, currentTarget - nums[i]);

            subset.pop();
            dfs(i+1, currentTarget);
        }

        dfs(0, target);
        return result;
    }
}
