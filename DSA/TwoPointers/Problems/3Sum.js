
// Three elements whose sum is 0.
function threesum(nums)
{  
        nums.sort((a,b) => a - b);
        let triplets = [];

        //left and right will cover the last two indexes.
        for(let i=0;i<nums.length - 2;i++)
        {
            //skip the duplicates
            if(i > 0 && nums[i] === nums[i-1])
                continue;

            let left = i +1;
            let right = nums.length - 1;

            while(left < right)
            {
                let currentSum = nums[i] + nums[left] + nums[right];

                if(currentSum === 0)
                {
                    triplets.push([nums[i], nums[left], nums[right]]);
                }

                if(currentSum > 0)
                {
                    right--;

                    //skip duplicates
                    while(nums[right] === nums[right+1])
                    right--;
                }
                else
                {
                    left++;

                    // skip duplicates
                    while(nums[left] === nums[left-1])
                    left++;
                }
            }
        }

        return triplets;
}

console.log(threesum([-1,0,1,2,-1,-4]));