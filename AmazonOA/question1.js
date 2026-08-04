// inventory = [] two product types 0,1.
// steps to convert 1 to 0 product type
// - choose a sub array, say of length k
// - choose an index (p) in sub array and flip it to 0.
// Find the minimum cost to convert all products to type 0.

// Sample Test case
// inventory = [1, 1, 1, 0, 1], k = 4, Ans: 7

function minimizeCostTest(inventory, k)
{
    // find the window with least no. of 1s

    function countOnes(l, r) {
        return inventory.slice(l, r + 1).filter(val => val === 1).length;
    }
    
    function selectLeast1sWindow()
    {
        let windows = [];
        let l =0
        let r =k-1;
    
        while(r < inventory.length)
        {
            if (countOnes(l, r) > 0)
                windows.push([l, r]);
            l++;
            r++;
        }
        
        //windows sorted by least number of 1s
        windows.sort(([l1, r1], [l2, r2]) => {
                    return countOnes(l1, r1) - countOnes(l2, r2);
        });

        return windows[0];
    }

    let count = 0;
    while(inventory.filter(val => val === 1).length > 0)
    {
        const bestWindow = selectLeast1sWindow();
        if(!bestWindow) break;
        const [l,r] = bestWindow;
        for(let i=l;i<=r;i++)
        {
            if(inventory[i] === 1)
            {
                inventory[i] = 0;
                count += countOnes(l, r);
                break;
            }
        }
    }

    return count;

}

function minimizeCost(inventory, k)
{
    const n = inventory.length;
    let totalCost = 0;
    let i = 0;

    while (i < n) {
        // Skip 0s
        if (inventory[i] === 0) {
            i++;
            continue;
        }

        // We hit a 1! Look at the window of size k starting at index i
        let m = 0;
        for (let j = i; j < Math.min(n, i + k); j++) {
            if (inventory[j] === 1) {
                m++;
            }
        }

        // Cost to eliminate all m ones in this window
        totalCost += (m * (m + 1)) / 2;

        // Jump past this window of size k
        i += k;
    }

    return totalCost;
}

console.log(minimizeCostTest([1, 1, 1, 0, 1], 4))