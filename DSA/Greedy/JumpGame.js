// Solution 1: DP with memo - TimeComplexity n^2
// solution 2: start from end and check if currIndex + arr[currIndex] >= target ( from currentIndex if the jump height lands you to target)

function JumpGame(nums)
{
    let target = nums.length -1;    
    for(let i=nums.length - 1;i>=0;i--)
    {
        let maxJump = nums[i];
        if(i + maxJump >= target)
        {
            target = i;
        }
    }

    return target === 0;
}

console.log(JumpGame([1,2,0,1,0]));
console.log(JumpGame([1,2,1,0,1]));