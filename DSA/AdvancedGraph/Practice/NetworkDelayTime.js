// Dijkstra's algorithm

function networkDelayTime(times, n, k) {
    const adj = {};
    for(let [u,v,t] of times)
    {
        if(!adj[u])
            adj[u] = [];
        adj[u].push([t,v]);
    }
    const minHeap = []; // [weight, node]
    minHeap.push([0, k]);
    const visited = new Set();

    let totalTime = 0;

    while(minHeap.length > 0)
    {
        minHeap.sort((a,b)=>a[0]-b[0]);

        const [w1, n1] = minHeap.shift();
        if(visited.has(n1)) continue; // other nodes also lead to a visited node
        visited.add(n1);
        totalTime = w1; // this way at last iteration we get the totalTime for reaching last node.

        if(adj[n1])
        {
            for(let [w2,n2] of adj[n1])
            {
                // multiple node can lead to same node. We only insert into visited afterwards. hence this check.
                if(!visited.has(n2))
                {
                    minHeap.push([w2 + w1, n2]);
                }
            }
        }
    }

    if(visited.size === n)
        return totalTime;
    return -1;
}


console.log("Answer: ", networkDelayTime([[1,2,1],[2,3,1],[1,4,4],[3,4,1]], 4, 1));