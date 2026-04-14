function maxSumOfSubArrayOfSize(arr, k)
{
    let l = 0;
    let r = l + 5;

    const length = arr.length;

    let bestSum = 0;
    while(r < length)
    {
        let sum = 0;
        for(let i=l;i<r;i++)
        {
            sum+=arr[i];
        }
        
        bestSum = sum > bestSum ? sum : bestSum;
        l++;
        r++;
    }

    return bestSum;
}

const result = maxSumOfSubArrayOfSize([8,3,-2,4,5,-1,0,5,3,9,-6], 5)
console.log("Result: ", result);