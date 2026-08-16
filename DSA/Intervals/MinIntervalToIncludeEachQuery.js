// Question: given intervals [start_i, end_i], and queries.
// The result of query[j] is the length of the shortest interval i;
// such that left_interval <= queries[j] <= right_interval (i.e. query lies b/w start and end of an interval)

function MinIntervalToIncludeEachQuery(intervals, queries)
{
    // 1. Sort intervals by left.
    intervals.sort((a,b) => a[0] - b[0]);

    // 2. to Process queries from smallest → largest.
    let sortedQueries = queries.map((val,i) => [val, i]).sort((a,b) => a[0] - b[0]); //[val, orgIdx]

    let ans = Array(queries.length).fill(-1);
    let heap = []; // [size, right]

    let j =0;

    for(let i=0;i<sortedQueries.length;i++)
    {
        let [q, orgIdx] = sortedQueries[i];

        // 3. Add every interval whose left <= query.
        while(j < intervals.length && intervals[j][0] <= q)
        {
            let [left,right] = intervals[j];
            let size = right - left + 1;
            heap.push([size, right]);
            heap.sort((a,b) => a[0] - b[0]);
            j+= 1;
        }

        // 4. Remove intervals whose right < query. Since this interval falls outside the query.
        while(heap.length > 0 && heap[0][1] < q)
        {
            heap.shift(); // remove the first element
        }

        // 5. The smallest remaining interval answers the query.
        if(heap.length > 0)
        {
            ans[orgIdx] = heap[0][0]; // size
        }
    }

    return ans;
}

console.log(MinIntervalToIncludeEachQuery([[1,3],[2,3],[3,7],[6,6]], [2,3,1,7,6,8]))