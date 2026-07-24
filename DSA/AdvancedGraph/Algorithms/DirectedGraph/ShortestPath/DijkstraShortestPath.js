// Questions: Get shortest path from source to all nodes

// Solution: Since shortest path we will use BFS
// Dijkstra uses a minHeap to get shortest path
function dijkstraShortestPath(graph, startNode, n)
{
    const distances = new Array(n).fill(Infinity);// init all distances to inf
    distances[startNode] = 0;
    const minHeap = [[0, startNode]]; // [[cost, startNode]]

    while(minHeap.length > 0)
    {
        minHeap.sort((a,b) => a[0]-b[0]);
        const [c1,n1] = minHeap.shift();

        // heap might hold [2,b],[3,b] 
        // we need to select one with lowest cost; 
        // Since that is what is stored in distances array.
        if (c1 > distances[n1]) {
            continue;
        }

        for(let [cost, nei] of graph[n1])
        {
            const distance = cost + c1;
            if(distance < distances[nei])
            {
                distances[nei] = distance;                
                minHeap.push([cost + c1, nei]);
            }
        }
    }

    return distances;
}

// {node: [[cost, nextNode]]}
const minDistances = dijkstraShortestPath(
{
    0: [[4,1], [1,2]],
    1: [[1,3]],
    2: [[2,2],[5,3]],
    3: []
},
0,
4
)

console.log("Answer: ", minDistances);