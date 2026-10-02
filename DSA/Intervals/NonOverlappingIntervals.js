function NonOverlappingIntervals(intervals)
{
    if(intervals.length === 0) return 0;
    intervals.sort((a,b) => a[1] - b[1]);
    let n = intervals.length;
    let count = 1;
    let end = intervals[0][1];
    for(let i=1;i<n;i++)
    {

        //i         4...5
        //end ....3
        if(end <= intervals[i][0])
        {
            end = intervals[i][1];
            count++;
        }
    }

    return n - count; // remove these many intervals to make intervals non overlapping
}

console.log(mergeintervals([[1,3],[1,5],[6,7]]));