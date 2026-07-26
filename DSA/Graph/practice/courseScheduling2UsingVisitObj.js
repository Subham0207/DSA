// Solution
// Using topological sort technique
// 1. visited obj to detect cycle.

function findOrder(numCourses, prerequisites) {
    const adj = {};
    for(let i=0;i<numCourses;i++)
    {
        adj[i] = [];
    }
    for(let [c1,c2] of prerequisites)
    {
        adj[c2].push(c1);
    }
    
    // topological sort
    // post order dfs
    // c not in visit - not visited | true - visiting | false - visited
    const visit = {};
    const res = [];

    function dfsCycleDetection(c)
    {
        if(c in visit) return visit[c];

        visit[c] = true;

        for(let nei of adj[c])
        {
            if(dfsCycleDetection(nei)) return true
        }

        visit[c] = false;
        res.push(c);
        return false

    }

    for(let i=0;i<numCourses;i++)
    {
        if(dfsCycleDetection(i))
            return [];
    }
    return res.reverse();
}

console.log('Answer: ', findOrder(3, [[1,0]]));