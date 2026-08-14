//Struggled: Yes

var trap = function(height) {

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l]; // tallest wall encountered from left
    let rightMax = height[r]; // tallest wall encountered from right
    let res = 0;

    // note waterlevel = min(leftMax, rightMax) - currentHeight
    while(l < r)
    {
        // Whichever side has the smaller maximum can be solved immediately, 
        // because that smaller maximum determines the water level.
        if(leftMax < rightMax)
        {
            l++;
            leftMax = Math.max(leftMax, height[l]); // see if new height is taller
            res += leftMax - height[l]; // water level = leftMax - currentLevel
        }
        else{
            r--;
            rightMax = Math.max(rightMax, height[r]); // see if new height is taller
            res += rightMax - height[r];
        }
    }
    return res;
};

const result = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log("Result: ", result);