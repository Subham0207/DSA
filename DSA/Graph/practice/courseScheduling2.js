// Solution
// Using topological sort technique
// 1. visited set
// 2. cycle set
// Need visited and cycle set to find cycle in directed graph

function courseSheduling2(numCourses, prerequisites)
{
    const adj = {};
    for(let i =0;i<numCourses;i++)
    {
        adj[i] = [];
    }

    for(let [a,b] of prerequisites)
    {
        adj[a].push(b);
    }

    const output = [];
    const visited = new Set();
    const cycle = new Set();

    function dfs(next)
    {
        if(cycle.has(next))
            return false;
        if(visited.has(next))
            return true;

        cycle.add(next);
        for(let i of adj[next])
        {
            if(!dfs(i))
                return false
        }
        cycle.delete(next);
        visited.add(next);
        output.push(next);
        return true;
    }

    for(let i=0;i<numCourses;i++)
    {
        if(!dfs(i))
            return [];
    }
    return output;
}

console.log('Answer: ', courseSheduling2(3, [[1,0]]));