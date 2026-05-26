class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const size = nums.length - 1;
        const memo = {};
        function dfs(i)
        {
            if(i > size)
                return 0;
            if(memo[i])
                return memo[i]
            // Can only rob alternate houses;
            // option 1: skip this house so can rob the next house.
            // option 2: rob this house and then rob the next alternate house.
            const result = Math.max(dfs(i+1), nums[i] + dfs(i+2))
            memo[i] = result;
            return result;
        }

        return Math.max(dfs(0), dfs(1));
    }
}
