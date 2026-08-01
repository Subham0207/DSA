function minNumberOfConsecutiveBitFlips(nums, k)
{
    const queue = [];
    let totalFlips = 0;

    for(let i=0;i<nums.length;i++)
    {
        while(queue.length > 0 && queue[0] <= i - k)
        {
            queue.shift();
        }

        // queue.length = num of times index i has been flipped.
        // then the formula gives us if nums[i] is currently 0 after the flips.
        const isEffectiveZero = (nums[i] + queue.length) % 2 === 0;

        //bit is zero, so we must flip it.
        if(isEffectiveZero)
        {
            // out of bounds; impossible state
            if(i+k > nums.length)
                return -1;
            
            queue.push(i);
            totalFlips++;
        }
    }

    return totalFlips;
}

console.log(minNumberOfConsecutiveBitFlips([0,1,0], 1))