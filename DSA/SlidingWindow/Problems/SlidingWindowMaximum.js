// Solution two approaches:
// - optimized O(n), aka, Monotonic Deque approach
//      - Note, window is from: (i - k + 1) to i
// - brute force

function slidingWindowMaximum(nums, k)
{
    const res = [];
    const deque = [];

    // window is from: (i - k + 1) to i
    // same reason as r - l + 1 to find window size.(0 based indexing so we add 1)
    for(let r =0;r<nums.length;r++)// note i is the right edge of the sliding window
    {
        // remove indexes that are out of bounds; note "if" is used
        // since i is right of window, we get left edge by: i - k
        if(deque.length > 0 && deque[0] <= r - k)
        {
            deque.shift();
        }

        //remove index of elements which are smaller than current; note "while" is used.
        const lastIndex = deque[deque.length - 1];
        while(deque.length > 0 && nums[lastIndex] <= nums[r])  // we pop even if values are equal
        {
            deque.pop();
        }

        deque.push(r);

        // after we have been through k elements; append the max to res
        // this is what starts the windowing
        // as, we progress any element out of bounds is removed.
        if(r >= k-1) // [0 to  k-1] is k elements
        {
            res.push(nums[deque[0]]); // the 0th index will be the largest in this window.
        }
    }
}


// Brute force solution
function maxSlidingWindow(nums, k) {
    let l = 0;
    let r = k - 1;
    const res = [];
    while(l >= 0 && r < nums.length)
    {
        const max = Math.max(...nums.slice(l,r+1));
        res.push(max);
        l++;
        r++;
    }

    return res;
}