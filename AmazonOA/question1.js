// inventory = [] two product types 0,1.
// steps to convert 1 to 0 product type
// - choose a sub array, say of length k
// - choose an index (p) in sub array and flip it to 0.
// Find the minimum cost to convert all products to type 0.

// Sample Test case
// inventory = [1, 1, 1, 0, 1], k = 4, Ans: 7

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

console.log(minimizeCost([1, 1, 1, 0, 1], 4))