// We hardcode minDist[0] = 0 to trick the algorithm into starting with Node 0.

// Every time a new node joins the network, it acts like a new power station—we calculate distances from only this new node to all unconnected nodes.

// If the new node offers a shorter road than an unconnected node previously had in minDist, we overwrite minDist with the shorter distance.

// new node cannot offer a shorter path to an already connected node.

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