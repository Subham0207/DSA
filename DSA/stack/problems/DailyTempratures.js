// Need to find for ith day how many days in future a warm day is observed.
// example: [30,38,30,36,35,40,28]
// Ans: [1,4,1,2,1,0,0]; for 0, 1 is higher, for 1, 4 day is higher, and so on...

function dailyTempratures(arr)
{
    let n = arr.length;
    let res = Array(n).fill(0);
    let stack = []; // [temp, index]
    arr.forEach((temp, i) => {
        // all the elements in the stack where current temp is greater.
        while(stack.length > 0 && temp > stack[stack.length -1][0])
        {
            const [t,j] = stack.pop();
            res[j] = i - j;
        }
        stack.push([temp, i]);

    })

    return res;
}


console.log(dailyTempratures([30,38,30,36,35,40,28]));