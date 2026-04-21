/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = new Map(); // since total can be negative we use map and not array.
    function dfs(n, total)
    {
        //This is so you use all numbers.
        if(n === nums.length)
            return total === target ? 1: 0

        const key = `${n},${total}`;
        if(memo.has(key)) return memo.get(key);

        const add = dfs(n+1, total + nums[n]);
        const subtract = dfs(n+1, total - nums[n]);

        const result = add + subtract;
        memo.set(key,result);
        return result;
    }

    return dfs(0, 0)
};