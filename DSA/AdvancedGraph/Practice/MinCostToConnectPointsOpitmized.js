// Solution: MST ( Minimum Spanning Tree) Track each nodes min distance from the MST.
// Using Adjacency Matrix

// - minDist: n nodes number[Infinity]; visited n nodes boolean[false]
// - set minDist[0] = 0 starting node distance from MST is 0
// - loop through minDist; if node not visited and distance < minDist[i]; make it currentNode; This will select 0th node to start the chain.
// - make currentNode visited
// - Loop through n nodes; find node closest to current node and set its distance in minDist; since this node is not visited yet it will get selected in next iteration


function minCostConnectPoints(points) {
    const n = points.length;
    
    // minDist[i] stores the minimum cost to connect node i to the MST
    const minDist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    
    // Start from node 0 (cost is 0)
    minDist[0] = 0;
    
    let totalCost = 0;
    let edgesUsed = 0;

    while (edgesUsed < n) {
        let currNode = -1;
        let currMinDist = Infinity;

        // Step 1: Find the unvisited node with the smallest distance to the MST
        for (let i = 0; i < n; i++) {
            if (!visited[i] && minDist[i] < currMinDist) {
                currMinDist = minDist[i];
                currNode = i;
            }
        }

        // Step 2: Include this node in the MST
        visited[currNode] = true;
        totalCost += currMinDist;
        edgesUsed++;

        // Step 3: Update minDist for all remaining unvisited nodes
        const [x1, y1] = points[currNode];
        for (let nextNode = 0; nextNode < n; nextNode++) {
            if (!visited[nextNode]) {
                const [x2, y2] = points[nextNode];
                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                
                if (dist < minDist[nextNode]) {
                    minDist[nextNode] = dist;
                }
            }
        }
    }

    return totalCost;
}