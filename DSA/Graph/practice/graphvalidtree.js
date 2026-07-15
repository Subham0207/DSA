// graph is a valid tree if
// 1. graph is fully connected
// 2. No cycles
// only need visited set to find cycle in undirected graph

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
    function dfs(next, prev)
    {
        if(visited.has(next))
            return false;

        visited.add(next);
        for(let i of adj[next])
        {
            if(prev === i)
                continue;
            if(!dfs(i, next))
                return false;
        }
        return true;
    }

    //if graph is fully connected we should be able to traverse the whole graph from 0th node.
    return dfs(0) && visited.size === n;
}

console.log('Answer: ', graphValidTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));