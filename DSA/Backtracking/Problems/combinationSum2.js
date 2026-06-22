class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = [];
        const subset = [];

        candidates.sort((a,b) => a-b);
        function dfs(i, currentTarget)
        {
            if(currentTarget === 0)
            {
                result.push([...subset])
                return
            }
            if( currentTarget < 0 || i === candidates.length)
            return;
            
            subset.push(candidates[i]);
            dfs(i+1,  currentTarget - candidates[i]);
            subset.pop();

            while(i + 1 < candidates.length && candidates[i] === candidates[i+1])
            {
                i++;
            }
            dfs(i+1,  currentTarget);
        }

        dfs(0, target);
        return result;
    }
}
