// Prims algorithm

function minCostConnectPoints(points) {
    const adj = {};
    for (let i = 0; i < points.length; i++) {
        adj[i] = [];
    }
    for(let i =0;i<points.length;i++)
    {
        const [x1, y1] = points[i];
        for(let j=i+1;j<points.length;j++) // j=i+1 to avoid duplicates
        {
            const [x2, y2] = points[j];
            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);    
            adj[i].push([distance, j]); // [cost, node]
            adj[j].push([distance, i]); // [cost, node]
        }
    }

    let res = 0;
    const visited = new Set();
    const minHeap = [[0,0]];
    while(minHeap.length > 0)
    {
        minHeap.sort((a,b)=>a[0]-b[0]);
        const [c1, n1] = minHeap.shift();
        if(visited.has(n1)) continue;
        visited.add(n1);
        
        res += c1;

        for(let [c2, n2] of adj[n1])
        {
            if(!visited.has(n2))
            {
                minHeap.push([c2,n2]);
            }
        }
    }

    return res;
}


console.log('Answer: ', minCostConnectPoints([[0,0],[2,2],[3,3],[2,4],[4,2]]));