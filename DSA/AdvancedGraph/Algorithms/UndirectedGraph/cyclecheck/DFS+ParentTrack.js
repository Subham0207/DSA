function dfsCycleDetection(edges)
{
    const adj = {};
    for(let [src, nei] of edges)
    {
        if (!adj[src]) adj[src] = [];
        if (!adj[nei]) adj[nei] = [];

        adj[src].push(nei);
        adj[nei].push(src);
    }

    const visited = new Set();
    function dfs(src, parent)
    {
        visited.add(src);
        for(let nei of adj[src])
        {
            if(!visited.has(nei))
            {
                if(dfs(nei, src)) return true;
            }
            else if (nei !== parent)
            {
                return true;
            }
        }

        return false;
    }

    for (const key of Object.keys(adj)) {
        const node = Number(key);

        // Only start DFS from an unvisited node
        if (!visited.has(node)) {
            if (dfs(node, -1)) {
                return true;
            }
        }
    }

    return false;
}

console.log("Answer:", dfsCycleDetection([[0, 1],[1, 2],[2, 0]]));
console.log("Answer:", dfsCycleDetection([[0, 1],[1, 2]]));
