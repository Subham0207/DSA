function largestRectangleInHistogram(heights)
{
    let stack = [];
    let n = heights.length;
    let maxArea = 0;

    for(let i=0;i<n;i++)
    {
        while(stack.length > 0 && heights[stack[stack.length -1]] > heights[i])
        {
            let index = stack.pop();
            let right = i - 1;
            let left = stack.length === 0 ? -1: stack[stack.length -1];
            // rectangle starts from (left + 1) to (i-1). Since 0 indexed we add 1;
            // (i - 1) - (left + 1) + 1
            // say left is 0 and i = 4. Width is 3 not 4.
            maxArea = Math.max(maxArea, heights[index] * (right - left));
        }
        stack.push(i);
    }

    
    while(stack.length > 0)
    {
        let index = stack.pop();
        let right = n - 1;
        let left =  stack.length === 0 ? -1: stack[stack.length - 1];
        maxArea = Math.max(maxArea, heights[index] * (right - left));
    }

    return maxArea;
}
console.log(largestRectangleInHistogram([7,1,7,2,2,4]))
console.log(largestRectangleInHistogram([1,3,7]))