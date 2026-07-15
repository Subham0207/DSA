// Solution: Loop detection by push/pop or add/delete of this node to exit/backtrack a branch

// numCourses: number
// prerequisites: [[number, number]]
function courseScheduling(numCourses, prerequisites)
{
    //creating the adj list
    //dfs on the adj list with loop detection
    const adj = {};
    for(let i = 0;i<numCourses;i++)
    {
        adj[i] = [];
    }

    for(let [a,b] of prerequisites)
    {
        adj[a].push(b);
    }

    const visited = new Set();
    function dfs(next){
        if(visited.has(next))
            return false;
        if(adj[next].length === 0)
            return true;
        visited.add(next);

        for(let i of adj[next])
        {
            if(!dfs(i)) return false;
        }
        visited.delete(next);
        adj[next] = [];
        return true
    }

    for(let i = 0;i<numCourses;i++)
    {
        if(!dfs(i)) return false;
    }
    return true;
}

console.log('Answer:', courseScheduling(2, [[0,1],[1,0]]));
console.log('Answer:', courseScheduling(2, [[0,1]]));