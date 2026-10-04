# Fixed length

`
    // max sum in a window of size k

    function fixedSlidingWindow(nums, k)
    {
        let maxSum = -Infinity; // -Infinity for most cases. If only +ve int are involved can use 0.
        let windowSum = 0;
        let start = 0;
        for(let end=0;end<nums.length;end++)
        {
            windowSum += nums[end];
            
            //window size breached
            //remove elements that left the window
            if(end - start + 1 === k)
            {
                maxSum = Math.max(windowSum, maxSum);
                windowSum -= nums[start];
                start++;
            }
        }

        return maxSum;
    }
`

- Max points you can obtain from cards - window size `cards.length - k`
_____________
1, 100, 10, 0, 4, 5, 6 and K = 3; windowsize = n - k = 4

`
     function maxScore(cards, k)
     {
        let total = cards.reduce((x,accum) => accum += x, 0);
        if(k === cards.length) return total;
        let windowSum = 0;
        let start = 0;
        let maxPoints = 0;

        for(let end=0;end<cards.length;end++)
        {
            windowSum += cards[end];

            if(end - start + 1 > cards.length - k)
            {
                maxPoints = Math.max(total - windowSum, maxPoints);
                windowSum -= cards[start];
                start++;
            }
        }

        return maxPoints;
     }
`

- max sum without duplicate elements

`
    function maxSum(nums, k)
    {
        let windowSum = 0;
        let maxSum = -Infinity;
        let start = 0;

        let visited = new Set(); // values of visited

        for(let end=0;i<nums.lenght;end++)
        {
            while(visited.has(nums[end]))
            {
                visited.delete(nums[start]);
                window -= nums[start];
                start++;
            }

            windowSum += nums[end];

            if(end - start + 1 === k)
            {
                maxSum = Math.max(maxSum, windowSum);
                windowSum -= nums[start];
                start++;
            }
        }   
    }
`

# Variable length

`
    // Longest subarray where at most two different fruits are collected

    function variableSlidingWindow(fruits, k)
    {
        let start = 0;
        let state = {};
        let maxFruits = 0;

        for(let end=0;end<fruits.length;end++)
        {
            state[fruits[end]] = (state[fruits[end]] || 0) + 1;

            while(state[fruits[end]] > 1)
            {
                state[fruits[start]] -= 1;
                if(state[fruits[start]] === 0)
                {
                    delete state[fruits[start]];
                }
                start++;
            }

            maxFruits = Math.max(maxFruits, end - start + 1); // the window size gives the answer.
        }

        return maxFruits;
    }
`

- Longest repeating character replacement
    - Idea of maxFrequrency
    - use while((end - start + 1) - maxf > k) to shrink window.
