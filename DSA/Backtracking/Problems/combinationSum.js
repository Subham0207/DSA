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

    // Using a for loop...
    combinationSum(candidates, target) {
        // Your code goes here
        let stack = [];
        let result = [];

        function dfs(i, total)
        {
            if(total === target)
            {
                result.push([...stack]);
                return;
            }
            
            if(i >= candidates.length || total > target) return;
            
            for(let j=i;j<candidates.length;j++)
            {
                let temp = candidates[j];
                stack.push(temp)

                dfs(j,total + temp);

                stack.pop();
            }
        }

        dfs(0,0);
        return result;
    }
}
