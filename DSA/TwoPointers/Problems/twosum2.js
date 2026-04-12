var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while(l < r )
    {
        const sum = numbers[l] + numbers[r];
        if(sum < target)
        {
            l++;
        }
        if(sum > target)
        {
            r--;
        }
        else{
            return [l, r];
        }

    }
};

const result = twoSum([2,7,11,15], 9);
console.log("Result: ", result);