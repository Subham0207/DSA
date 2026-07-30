// Solution:
// recur using left and right pointers
// when interating start from left + 1 to right
// left = (ind 0, val 1), right (ind 4, val 1)
//[1,3,4,5,1]; left = 0 and right = 4;
// burst val 3 last + burst left part ( 0 elem b/w val 1 and val 3) + burst right part (val 4,5 b/w  val 3 and  val 1)


function burstBalloons(nums)
{
    const balloons = [1,...nums,1];
    const memo = new Map();

    function dfs(left,right)
    {
        if(left + 1 === right )
            return 0;
        const key = `${left}-${right}`;
        if(memo.has(key)) return memo.get(key);

        let res = 0;
        for(let i=left+1;i<right;i++)
        {
            const coins = balloons[left] * balloons[i] * balloons[right]
            + dfs(left,i) + dfs(i,right);

            res = Math.max(coins, res);
        }
        memo.set(key, res);
        return res;
    }

    return dfs(0, balloons.length -1);
}

console.log(burstBalloons([4,2,3,7]));