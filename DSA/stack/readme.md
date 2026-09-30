# Patterns to learn

- stack - push and pop
- monotonic stack - for every index in an array at what index the next greater value occurs.

# Monotonic stack
`
    function nextGreaterIndex(nums)
    {
        let stack = [];
        let n = nums.length;
        let result = new Array(n).fill(-1);

        for(let i=0;i<n;i++)
        {
            while(stack.length > 0 && nums[i] > nums[stack[stack.length - 1]])
            {
                let index = stack.pop();
                result[index] = i - index;
            }
            stack.push(i);
        }

        result;
    }
`