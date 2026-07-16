// Solution:
// find the edge so the graph has no cycles.
// return the last edge from the edges removing which there is no cycles.
// note we are not given number of edges. But are told adding only 1 edge created the cycle
// 1. Given a tree/acyclic graph: nodes = n then edges = n-1;
// so, n edges are there so there are n nodes.

function redundantConnection(edges)
{
    const n = edges.length;
    const parent = Array.from({length: n+1}, (_,i)=>i);
    const rank = new Array(n+1).fill(1);

    function find(n1)
    {
        let res = n1;
        while(res !== parent[res])
        {
            res = parent[parent[res]];
        }
        return res;
    }

    function union(n1,n2)
    {
        const p1 = find(n1);
        const p2 = find(n2);

        if(p1 === p2)
            return false;

        if(rank[p1] > rank[p2])
        {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        }
        else
        {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    }

    for(let [n1,n2] of edges)
    {
        if(!union(n1,n2))
            return [n1,n2];
    }
}

console.log('Remove edge:', redundantConnection([[1,2],[1,3],[3,4],[2,4]]))