function twoSum(nums, target) {
    let l = 0;
    let r = nums.length -1;

    while(l < r)
    {
        const sum = nums[l] + nums[r];
        if(sum < target)
        {
            l++;
        }
        else if(sum > target)
        {
            r--;
        }
        else{
            return [l, r];
        }
    }
}

const result = twoSum([3,4,5,6], 7);
const result2 = twoSum([4,5,6], 10);
console.log("Result: ", result);
console.log("Result2: ", result2);