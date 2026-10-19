function triangleNumber(nums)
{
    nums.sort((a,b) => a-b);
    let res = 0;

    for(let i=nums.length - 1;i>=0;i--)
    {
        let l =0;
        let r = i -1;

        while(l < r)
        {
            if(nums[l] + nums[r] > nums[i])
            {
                res += r - l;
                r--;
            }
            else
            {
                l++
            }
        }
    }

    return res;
}

console.log(triangleNumber([11,4,9,6,15,18]))