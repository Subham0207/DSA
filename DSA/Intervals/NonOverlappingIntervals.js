function mergeintervals(intervals)
{
    intervals.sort((a,b) => a[1] - b[1]);
    let res = []; //[start,end]
    for(let i=0;i<intervals.length;i++)  // interval1 ends, before interval2 starts; i.e. no overlap
    {
        if(res.length === 0 || res[res.length -1][1] < intervals[i][0])
        {
            res.push(intervals[i]);
        }
        else
        {
            let lastIndex = res.length -1;
            res[lastIndex] = [res[lastIndex][0], Math.max(res[lastIndex][1], intervals[i][1])]
        }
    }

    return res;
}

console.log(mergeintervals([[1,3],[1,5],[6,7]]));