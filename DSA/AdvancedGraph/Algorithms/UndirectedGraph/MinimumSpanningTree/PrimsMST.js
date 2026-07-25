function mst(n,startNode, point)
{
    const n = point.length;
    const costs = new Array(n).fill(Infinity);
    costs[startNode] = 0;
    const visited = new Array(n).fill(false);

    let edgesUsed = 0;

    while(edgesUsed < n)
    {
        const currNode = -1;
        const currCost = Infinity;

        for(let i=0;i<n;i++)
        {
            if(!visited[i] && costs[i] < currCost)
            {
                currNode = i;
                currCost = costs[i];
            }
        }

        edgesUsed++;
        visited[i] = true;

        const [x1,y1] = points[currNode]; 
        for(let i =0;i<n;i++)
        {
            if(!visited[i])
            {
                const [x2,y2] = points[i];
                const distance =  Math.abs(x1 - x2) + Math.abs(y1 - y2);
                if(distance < costs[i])
                {
                    costs[i] = distance;
                }
            }
        }
    }

    return costs;
}