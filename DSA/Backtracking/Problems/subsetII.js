class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        const subsets = [];
        nums.sort((a, b) => a - b);
        function backtrack(i)
        {
            if(i === nums.length)
            {
                result.push([...subsets]);
                return;
            }
            
            subsets.push(nums[i]);
            backtrack(i+1);

            subsets.pop();

            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            backtrack(i+1);
        }
        backtrack(0);
        return result;
    }
}
