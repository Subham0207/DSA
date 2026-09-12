// product except self with O(n)  Time complexity

function productExceptSelf(nums)
{
    let n = nums.length;
    let res = new Array(n).fill(1);

    console.log("PREFIX")
    let prefix = 1;
    for(let i=0;i<n;i++)
        {
            res[i] *= prefix;
            prefix *= nums[i];
            console.log(res, prefix, i);
        }
        
    console.log("POSTFIX")
    let postfix = 1;
    for(let i=n-1;i>=0;i--)
    {
        res[i] *= postfix;
        postfix *= nums[i];
        console.log(res, postfix, i);
    }

    return res;
}

console.log(productExceptSelf([1,2,4,6]));