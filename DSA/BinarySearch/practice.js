function findMin(nums) {
        let l = 0;
        let r = nums.length -1;
        if(nums[l] < nums[r]) return nums[l];

        while(l<r)
        {
            let m = Math.floor((l+r)/2);
            console.log(l,r,m);
            if(nums[m] > nums[r])
            {
                l = m + 1;
            }
            else
            {
                r = m;
            }
        }

        return nums[l];
}

console.log(findMin([3,4,5,6,1,2]));