// Union find  | Disjoint set
// - Evey vertex is its own parent
// - track rank of each node

function unionFind(n, edges)
{
    const parent = Array.from({length: n}, (_,i)=>i); // [0,1,2,...] every node is its own parent
    const rank = new Array(n).fill(1);

    function find(n)
    {
        const node = n;
        while(node === parent[node])
        {
            node = parent[parent[n]]
        }

        return node;
    }

    function union(n1,n2)
    {
        const p1 = find(n1);
        const p2 = find(n2);

        if(p1 === p2)
            return 0;

        if(rank[p1] > rank[p2])
        {
            rank[p1] += rank[p2];
            parent[p2] = p1;
        }
        else
        {
            rank[p2] += rank[p1];
            parent[p1] = p2;
        }

        return 1;
    }

    const res = n;
    for(let [n1,n2] of edges)
    {
        res -= union(n1,n2);
    }
    return res;
}