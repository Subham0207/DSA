// Solution 1: dfs
// Solution 2: farthest you can jump from current index.
// step 0: end, far = 0, minJump = 0;
// step 1: ForLoop i: from i mark farthest you can jump to.
// step 2: if i === end; then increment minJump and set end == far.
function jump(nums)
{
    let end = 0;
    let far = 0;
    let minJump = 0;

    for(let i=0;i<nums.length-1;i++) // we want to jump to len - 1 index so not including it.
    {
        far = Math.max(far, i + nums[i]); // from i mark farthest you can jump to.
        if(i === end)
        {
            minJump++;
            end = far;
        }
    }

    return minJump;
}

console.log(jump([2,4,1,1,1,1]));



function jumpDFSSolution(nums) {
        function dfs(i)
        {
            if(i >= nums.length - 1) return 0;
            let min = Infinity;
            for(let j=1;j<=nums[i];j++)
            {
                // 1...i jumps so dfs(i+j)
                min = Math.min(1 + dfs(i+j), min)
            }

            return min;
        }

        return dfs(0);
}