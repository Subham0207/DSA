// Solution: graph traversal, back tracking, lexical ordering
// 

function findItinerary(tickets) {
    const adj = {};
    // sort from or to destination. localcompare does lexical sorting
    tickets.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))

    for(let [src, dest] of tickets)
    {
        if(!adj[src])
            adj[src] = [];
        adj[src].push(dest);
    }

    const res = ['JFK'];
    function dfs(src)
    {
        // total stops = tickets + 1
        if(res.length === tickets.length + 1) return true;
        if(!adj[src]) return false;

        const destinations = adj[src];
        for(let i = 0;i<destinations.length;i++)
        {
            const dest = destinations[i];
            destinations.splice(i,1); // remove 1 elements starting from index i
            res.push(dest);

            if(dfs(dest)) return true;
            destinations.splice(i,0,dest); // remove 0 elements and add dest starting from index i
            res.pop();
        }
        return false;
    }

    dfs('JFK');
    return res;
}


console.log('Answer: ', findItinerary([["HOU","JFK"],["SEA","JFK"],["JFK","SEA"],["JFK","HOU"]]))