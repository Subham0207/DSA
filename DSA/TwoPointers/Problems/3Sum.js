function threesum(arr)
{  
    arr.sort((a,b)=>a-b);
    let res = [];
    // two pointers will cover the last two elements
    for(let i=0;i<arr.length - 2;i++)
    {
        // you cannot Add anything to 0 to get 0.
        // so once i goes part a val 0 we break and return res;
        if(arr[i] > 0) break;
        if(i > 0 && arr[i] === arr[i-1]) continue;
        let l = 0;
        let r = arr.length -1;

        while(l < r)
        {
            let total = arr[i] + arr[l] + arr[r];
            if(total === 0)
            {
                res.push([arr[i] , arr[l] , arr[r]])
                l++;
                r--;

                //after finding answer skips duplicates
                while(l < r && arr[l] === arr[l -1])l++;
                while(l < r && arr[r] === arr[r + 1])r--;
            }
            else if (total > 0)
            {
                r--;
            }
            else
            {
                l++;
            }
        }
    }

    return res;
}

console.log(threesum([-1,0,1,2,-1,-4]));