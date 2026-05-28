class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        function dfs(i, nums, memo = {})
        {
            if(i > nums.length - 1)
            return 0;
            if(memo[i])
                return memo[i];
            const result = Math.max(nums[i] + dfs(i+2, nums, memo), dfs(i+1, nums, memo))
            memo[i] = result;
            return result;
        }
 
        return Math.max(dfs(0, nums.slice(0, nums.length - 1)), dfs(0, nums.slice(1,nums.length)))
    }
}
