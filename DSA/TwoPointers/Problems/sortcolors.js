function sortColor(nums)
{
    function moveN(nums,n, start,end)
    {
        let index = start;

        for(let i=start;i<end;i++)
        {
            if(nums[i] !== n)
            {
                [nums[i], nums[index]] = [nums[index], nums[i]];
                index++;
            }
        }

        return index;
    }

    let index = moveN(nums,2,0,nums.length);
    moveN(nums,1,0,index);

    return nums;
}

console.log(sortColor([2,1,2,0,1,0,1,0,1]));