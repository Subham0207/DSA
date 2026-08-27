function reconstructFlightPaths(tickets)
{
    tickets.sort((a,b) => b[0].localeCompare(a[0]) || b[1].localeCompare(a[1]));
    const adj = {};
    for(let [start,end] of tickets)
    {
        if(!adj[start])adj[start] = [];
        adj[start].push(end);
    }

    let res = [];
    function hierholzer(src)
    {
        while(adj[src]?.length)
        {
            let dst = adj[src].pop();
            hierholzer(dst);
        }
        res.push(src);
    }

    hierholzer('JFK');
    return res.reverse();
}

console.log('Answer: ', reconstructFlightPaths([["HOU","JFK"],["SEA","JFK"],["JFK","SEA"],["JFK","HOU"]]))