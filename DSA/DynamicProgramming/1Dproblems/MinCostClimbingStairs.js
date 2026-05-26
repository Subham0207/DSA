class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const top = cost.length - 1;
        const memo = {};
        function dfs(i)
        {
            if(i > top)
                return 0;
            if(memo[i])
                return memo[i]
            //Adding the cost of the current step.
            const result = cost[i] + Math.min(dfs(i+1), dfs(i+2));
            memo[i] = result;
            return result;
        }

        return Math.min(dfs(0), dfs(1));
    }
}
