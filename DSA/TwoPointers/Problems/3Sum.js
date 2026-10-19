
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

            let l = i +1;
            let r = nums.length - 1;

            while(l < r)
            {
                let currentSum = nums[i] + nums[l] + nums[r];

                if(currentSum === 0)
                {
                    triplets.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    while(nums[r] === nums[r+1]) r--;
                    while(nums[l] === nums[l-1]) l++;
                }
                else if(currentSum > 0)
                {
                    r--;
                }
                else
                {
                    l++;
                }
            }
        }

        return triplets;
}

console.log(threesum([-1,0,1,2,-1,-4]));