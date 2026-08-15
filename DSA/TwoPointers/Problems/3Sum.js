
// Three elements whose sum is 0.
function threesum(arr)
{  
    arr.sort((a,b)=>a-b);
    let res = [];
    // two pointers will cover the last two elements, so we do arr.length - 2
    for(let i=0;i<arr.length - 2;i++)
    {
        // since arr is sorted and we reached elem 0, 
        // so we cannot get a sum 0 with elems greater than 0 using rest of the array.
        // so once arr[i] goes greater than val 0 we break and return res;
        if(arr[i] > 0) break;

        //skipping duplicates, we already processed i-1.
        if(i > 0 && arr[i] === arr[i-1]) continue;
        let l = 0;
        let r = arr.length -1;

        //l < r, because l cannot be equal to r i.e. we cannot use duplicates.
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