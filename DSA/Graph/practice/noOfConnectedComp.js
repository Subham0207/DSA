// Union find / Disjoint set algorightm
// parent[], rank[], find(), union(), connectedComponent Counter-=union(n1,n2)

// n: number
// edges: []
function  noOfConnectedComponents(n, edges)
{
    const parent = Array.from({length: n}, (_,i)=> i);
    const rank = new Array(n).fill(1);

    function find(n1)
    {
        let res = n1;
        while( res !== parent[res])
        {
            parent[res] = parent[parent[res]];
            res = parent[res]
        }
        return res;
    }

    function union(n1,n2)
    {
        const p1 = find(n1);
        const p2 = find(n2);
        
        if(p1 === p2)
            return 0;
        
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

        return 1;
    }

    let res = n;
    for(let [n1,n2] of edges)
    {
        res -= union(n1,n2);
    }
    return res;
}

console.log("Connected components count:", noOfConnectedComponents(5, [[0,1],[1,2],[3,4]]));