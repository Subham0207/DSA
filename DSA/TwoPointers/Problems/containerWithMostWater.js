var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxWater = 0;

    while(l < r)
    {
        const diff = r - l;
        const h = Math.min(height[r], height[l]);
        const area = h * diff;
        maxWater = Math.max(area, maxWater);
        if(height[r] < height[l])
        {
            r--;
        }
        else{
            l++;
        }
    }
    return maxWater;
};

const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log("Result: ", result);