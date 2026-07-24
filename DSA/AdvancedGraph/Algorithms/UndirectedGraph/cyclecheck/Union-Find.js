function checkCycle(n, edges)
{
    // [0,1,2,...] every node is its own parent
    let parent = Array.from({ length: n }, (_, i) => i);
    let rank = new Array(n).fill(1);

    function find(n1)
    {
        let node = n1;
        while(node !== parent[node])
        {
            node = parent[parent[node]];
        }
        return node;
    }

    function union(n1,n2)
    {
        let p1 = find(n1);
        let p2 = find(n2);

        if(p1 === p2)
        {
            return false;
        }

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

        return true;
    }

    let res = n;
    for(let [n1,n2] of edges)
    {
        if(!union(n1,n2))
            return true;
    }
    return false;
}

console.log("Answer: ", checkCycle(3, [[0, 1],[1, 2],[2, 0]]))