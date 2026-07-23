function dfsTopologicalsort()
{
    const adj = {};// src: [nei]
    const order = []; // post order dfs. Need to reverse the order at end.

    // 3 state cycle detection: 
    // key not in visit means not visited |
    // visit[k] = true means visiting | 
    // visit[k] = false means visited
    const visit = {}; 

    function dfs(src)
    {
        if(src in visit) return visit[src];

        visit[src] = true;
        for(let nei of adj[src])
        {
            if(dfs(nei)) return true;
        }
        visit[src] = false;
        order.push(src);
        return false;
    }

    for(let src of Object.keys(adj))
    {
        if(dfs(src))
            return [] // no topological sort exits
    }

    return order.reverse();
}