// Bellman ford algorithm
// Each iteration in k+1 is one level/breadth of the graph. 
// And the second for loop is executed for each node at that depth.
// "if prices[u] == float('inf'): continue" is what helps us process valid edges originating from the last depth.

function findCheapestPrice(n, flights, src, dst, k)
{
    // Step 1: Initialize distances with infinity
    prices = new Array(n).fill(Infinity);
    prices[src] = 0

    // Step 2: Relax edges k + 1 times; k stops means k + 1 flights/edges will be used
    for(let i =0; i<k+1; i++){
        temp = [...prices]  // Snapshot of current prices ( in each level/Breadth )
        
        // This loops runs level by level.
        for(let [u, v, price] in flights)
        {
            if(prices[u] == Infinity)  // Only nodes from previous level/depth have with valid value other than Inf.
                continue  // Node 'u' hasn't been reached yet
            
            // Update destination using the snapshot value of u
            if(prices[u] + price < temp[v])
                temp[v] = prices[u] + price
        }
        
        prices = temp  // Update state for the next flight count (once all nodes until current level are processed update prices to advance to next level)
    }

    // Step 3: Return result
    if(prices[dst] === Infinity)
        return -1
    return prices[dst];
}

console.log(findCheapestPrice(4, [[0,1,200],[1,2,100],[1,3,300],[2,3,100]], 0, 3, 1));