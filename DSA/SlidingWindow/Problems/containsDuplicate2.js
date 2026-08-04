// Solution: Note we are using a fixed size window here.

function containsDuplicate2(nums,k)
{
    let l = 0;
    const window = new Set();
    for(let r=0;r<nums.length;r++)
    {
        if(r - l > k)
        {
            window.delete(nums[l]);
            l++;
        }
        if(window.has(nums[r]))
            return true;
        window.add(nums[r]);
    }

    return false;
}

console.log(containsDuplicate2([1,2,3,1], 3))
console.log(containsDuplicate2([2,1,2], 1))