// Longest subarray length with sum < s

function longestSubArray(arr, s)
{
    let l = -1;
    let best = 0;
    let currSum=0;
    for (let r = 0; r < arr.length; r++) {
        currSum += arr[r];
        while (currSum >= s){
            l++;
            currSum -= arr[l];
        }
        best = Math.max( best, r - l)
    }

    return best;
}

const result = longestSubArray([4,5,2,0,1,8,12,3,6,9], 15);
console.log("Result: ", result);