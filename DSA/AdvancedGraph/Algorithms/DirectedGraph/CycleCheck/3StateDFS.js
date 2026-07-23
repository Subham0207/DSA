function cycleCheck()
{
    const adj = {};
    
    // 3 state dfs: 
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
            if(dfs(nei)) return true
        }

        visit[src] = false;
        return false;
    }
}