// using visit object to detect cycle in a directed graph.


function canFinish(numCourses, prerequisites) {
    const adj = {};
    for(let i =0;i<numCourses;i++)
    {
        adj[i] = [];
    }
    for(let [c1,c2] of prerequisites)
    {
        adj[c2].push(c1);
    }

    //topological sort
    // 3 state cycle detection
    // not visited | visiting | visited
    const visit = {};
    function dfsCycle(c)
    {
        if(c in visit)return visit[c];
        visit[c] = true;
        for(let nei of adj[c])
        {
            if(dfsCycle(nei)) return true;
        }
        visit[c] = false;
        return false;
    }

    for(let i =0;i<numCourses;i++)
    {
        if(dfsCycle(i)) return false;
    }
    return true;
}

console.log('Answer:', canFinish(2, [[0,1],[1,0]]));
console.log('Answer:', canFinish(2, [[0,1]]));