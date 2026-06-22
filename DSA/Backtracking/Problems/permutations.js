class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const visited = [];
        const permutations = [];
        function backtrack(i)
        {
            if(i === nums.length)
            {
                permutations.push([...visited])
                return;
            }
            //to circle back.
            for(let j = 0;j<nums.length;j++)
            {
                // if nums doesnot contains duplicate numbers. this works.
                if(visited.includes(nums[j]))
                    continue;
                
                visited.push(nums[j]);
                backtrack(i+1);

                visited.pop();
            }
        }

        backtrack(0);
        return permutations;
    }
}
