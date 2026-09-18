function largestRectangleInHistogram(heights)
{
    let stack = [] // [index, height] index and height can be different since when dip the start extends to a before index
    let maxArea = 0;
    let n = heights.length;

    heights.forEach((height, i) => {

        // The idea is , the moment we see dip, we process the top of stack item
        // the top element cannot go any further in height so we get area.
        // the next dip element can now be pushed with its index to be starting from previous element ( which had a higher height ).
        let start = i;
        console.log(`start: ${start}, height: ${height}, maxArea: ${maxArea} before while`);
        while(stack.length > 0 && height < stack[stack.length - 1][1])
        {
            console.log('dip');
            const [j, h] = stack.pop(); // this returns the height just before dip i.e. stack[stack.length -1][1]
            maxArea = Math.max(maxArea, h * (i - j));
            start  = j; // index of next dip element start from the previous element index.
        }
        console.log(`start: ${start}, height: ${height}, maxArea: ${maxArea}`);
        stack.push([start, height]);
    });


    //left elements on stack will all be extending to end of the array from thier positions.
    while(stack.length > 0)
    {
        const [index, height] = stack.pop();
        w = n - index;
        maxArea = Math.max(maxArea, height * w);
        console.log('calculate area for remaining', maxArea);
    }

    return maxArea;
}

console.log(largestRectangleInHistogram([7,1,7,2,2,4]))
// console.log(largestRectangleInHistogram([1,3,7]))