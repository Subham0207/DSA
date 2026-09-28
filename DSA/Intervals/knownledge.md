# Sort by start to get overlapping intervals
- Detect overlap: previousEnd > currentStart
- i    =   2...5 ---> current
- i-1  = 1...3 -----> previous
`
    intervals.sort((a,b) => a[0] - b[0]);
    let merged = [];
    for(let i=0;i<intervals.length;i++)
    {
        if(merged.length === 0 || merged[merged.length - 1][1] <= intervals[i][0])
        {
            merged.push(intervals[i]);
        }
        else
        {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }
`

# Non overlapping intervals ( Sort by end )
`
    intervals.sort((a,b) => a[1] - b[1]);
    let end = intervals[0][1];
    let count = 1; // we keep one interval
    for(let i=1;i<intervals.length;i++)
    {
        if(end <= intervals[i][1])
        {
            end = intervals[i][1];
            count++;
        }   
    }

    let intervalToRemove = intervals.length - count;
`