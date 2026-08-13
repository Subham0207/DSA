// graph is a valid tree if
// 1. graph is fully connected
// 2. No cycles
// only need visited set to find cycle in undirected graph
// Using: DFS + tracking Parent

function graphValidTree(n, edges)
{
    const adj = {};
    for(let i =0;i<n;i++)
        adj[i]=[];
    for(let [a,b] of edges)
    {
        adj[a].push(b);
        adj[b].push(a);
    }

    const visited = new Set();

    //for finding cycle in a undirected graph
    function cycleFound(next, prev)
    {
        if(visited.has(next))
            return true;

        visited.add(next);

        if(adj[node])
        for(let i of adj[next])
        {
            if(prev === i)
                continue;
            if(cycleFound(i, next))
                return true;
        }
        return false;
    }

    //if graph is fully connected and no cycle found.
    return !cycleFound(0) && visited.size === n;
}

console.log('Answer: ', graphValidTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));